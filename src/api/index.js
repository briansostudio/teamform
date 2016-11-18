import {fb, db, auth} from './firebase'
import member from './member'
import event from './event'

export default {
  member,
  event,
	getTeamsFromEvent: function(eventId,cb){
		db.ref(eventId).on('value', (snapshot) => {
			cb(snapshot.val(), null)
		}, (error) => {
			cb(null, error)
		})
	},
	updateTeam:function(event, update, cb){
		db.ref(event+'/teams').update(update)
	},
}

