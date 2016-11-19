import {fb, db, auth} from './firebase'

export default {
  // NOT TESTED
  getTeamsFromEvent: function(eventId,cb){
    db.ref(eventId).on('value', (snapshot) => {
      cb(snapshot.val(), null)
    }, (error) => {
      cb(null, error)
    })
  },
  // NOT TESTED
  updateTeam:function(event, update, cb){
    db.ref(event+'/teams').update(update)
  },
  async createTeam(eventId, teamObj){
    return db.ref(`events/${eventId}/teams`).push(teamObj).key;
  }
}
