import {fb, db, auth, auth_providers} from './firebase'
import teamApi from './team'

export default {
  async register(eventId, {email, password}, userData){
    let user;
    try{
      user = await auth.signInWithEmailAndPassword(email, password);
    }catch(err){
      if(err.code === "auth/user-not-found"){
        //create new user
        user = await auth.createUserWithEmailAndPassword(email, password);

      }else if(err.code === "auth/wrong-password"){
        throw {
          code: "app/email-already-in-use",
          message: "This email already registered in our app"
        };
      }else{
        throw err;
      }
    }
    await this.assertNotRegisteredInEvent(user.uid, eventId);

    //create user;
    userData.id = user.uid;
    await this.getFirebaseRef(user.uid, eventId).set(userData);
    return user.uid;
  },
  async login(eventId, {email, password}, userData){
    let user;
    user = await auth.signInWithEmailAndPassword(email, password);

    await this.assertRegisteredInEvent(user.uid, eventId);
    return user.uid;
  },
  async assertRegisteredInEvent(userId, eventId){
    let exist = await this.getFirebaseRef(userId, eventId).once("value");
    if(exist.val() === null){
      throw {
        code: "app/not-registered-in-event",
        message: "You have not registered in this event"
      }
    }
  },
  async assertNotRegisteredInEvent(userId, eventId){
    let exist = await this.getFirebaseRef(userId, eventId).once("value");
    if(exist.val() !== null){
      throw {
        code: "app/user-already-register",
        message: "You have already registered in this event"
      }
    }
  },
  async socialLogin(platform ,eventId){
    let provider
    switch(platform){
      case 'google':
        provider = auth_providers[0]
        break
      case 'github':
        provider = auth_providers[1]
        break
    }
    let result = await auth.signInWithPopup(provider)

    let user = {
      name: result.user.displayName,
      description: "no description yet",
      id: result.user.uid
    }

    let exist = await this.getFirebaseRef(result.user.uid, eventId).once("value");
    if(exist.val() === null){
      await this.getFirebaseRef(result.user.uid, eventId).set(user);
      return {userId: user.id, firstTimeUser: true};
    }else{
      return {userId: user.id, firstTimeUser: false};
    }
  },
  async getMember(userId, eventId){
    let snapshot = await this.getFirebaseRef(userId, eventId).once("value");
    return snapshot.val();
  },
  async addIntervalToSchedule(eventId, userId, interval){
    let ref = this.getFirebaseRef(userId, eventId).child("schedule/intervals");
    return ref.push({
      start: interval.start,
      end: interval.end
    }).key;
  },
  async updateIntervalInSchedule(eventId, userId, intervalId, interval){
    let ref = this.getFirebaseRef(userId, eventId).child(`schedule/intervals/${intervalId}`);
    await ref.set(interval);
  },
  async removeIntervalFromSchedule(eventId, userId, intervalId){
    let ref = this.getFirebaseRef(userId, eventId).child(`schedule/intervals/${intervalId}`);
    await ref.remove();
  },
  async leaveTeam(eventId, userId, teamId){
    await Promise.all([
      this.updateMember(userId, eventId, {
        status: 'NO_TEAM',
        team: ''
      }),
      teamApi.removeMemberFromTeam(eventId, teamId, userId),
    ]);
  },
  //private use, should not call
  getFirebaseRef(userId, eventId){
    return db.ref(`events/${eventId}/members/${userId}`);
  },
  async updateMember(userId, eventId, updates){
    await this.getFirebaseRef(userId, eventId).update(updates);
  }
}
