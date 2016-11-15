import {fb, db, auth} from './firebase'

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
    await this.getFireBaseRef(user.uid, eventId).set(userData);
    return user.uid;
  },
  async login(eventId, {email, password}, userData){
    let user;
    user = await auth.signInWithEmailAndPassword(email, password);

    await this.assertRegisteredInEvent(user.uid, eventId);
    return user.uid;
  },
  async assertRegisteredInEvent(userId, eventId){
    let exist = await this.getFireBaseRef(userId, eventId).once("value");
    if(exist.val() === null){
      throw {
        code: "app/not-registered-in-event",
        message: "You have not registered in this event"
      }
    }
  },
  async assertNotRegisteredInEvent(userId, eventId){
    let exist = await this.getFireBaseRef(userId, eventId).once("value");
    if(exist.val() !== null){
      throw {
        code: "app/user-already-register",
        message: "You have already registered in this event"
      }
    }
  },
  socialLogin:function(type, cb){
    let provider
    switch(type){
      case 'Github':
        provider = new auth.GithubAuthProvider()
      case 'Google':
        provider = new auth.GoogleAuthProvider()
    }
    auth.signInWithRedirect(provider)
    getRedirectResult().then( (result) => {
      const token = result.credential.accessToken
      db.ref('users/').update(result.user)
      cb(token)
    } ).catch( (error) => {
      console.log(error)
    })
  },
  async getMember(userId, eventId){
    let snapshot = await this.getFireBaseRef(userId, eventId).once("value");
    return snapshot.val();
  },
  async addIntervalToSchedule(eventId, userId, interval){
    let ref = this.getFireBaseRef(userId, eventId).child("schedule/intervals");
    await ref.push({
      start: interval.start,
      end: interval.end
    });
  },
  //private use, should not call
  getFireBaseRef(userId, eventId){
    return db.ref(`events/${eventId}/members/${userId}`);
  },
}
