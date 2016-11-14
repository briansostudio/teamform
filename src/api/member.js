import {fb, db, auth} from './firebase'

export default {
  async register({eventId, name, email, password}){
    let user;
    try{
      user = await auth.createUserWithEmailAndPassword(email, password);
    }catch(err){
      if(err.code !== "auth/email-already-in-use"){
        throw err;
      }
      try{
        user = await auth.signInWithEmailAndPassword(email, password);
      }catch(err){
        if(err.code === "auth/wrong-password"){
          throw {
            code: "app/email-already-in-use",
            message: "This email already registered in our app"
          };
        }
        throw err;
      }

      let exist = await this.getFireBaseRef(user.uid, eventId).once("value");
      console.log(exist.val());
      if(exist.val() !== null){
        throw {
          code: "app/user-already-register",
          message: "You have already registered in this event"
        }
      }
    }

    let data = {
      name: name
    };
    await this.getFireBaseRef(user.uid, eventId).set(data);
    return user.uid;
  },
  login:function(user, cb){
    auth.signInWithEmailAndPassword(user.email, user.password).then( () => cb() ).catch((error) => {
      cb(error)
    })
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
  getAuthUserId(){
    return auth.currentUser.uid;
  },
  getFireBaseRef(userId, eventId){
    return db.ref(`events/${eventId}/members/${userId}`);
  },
  async getMember(userId, eventId){
    let snapshot = await this.getFireBaseRef(userId, eventId).once("value");
    return snapshot.val();
  }
}
