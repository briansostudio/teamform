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
	getAllEvents:function(){
		db.ref('events').on('value', (snapshot) => {
			cb(snapshot.val(), null)
		}, (error) => {
			cb(null, error)
		})
	},
	createEvent:function(name){
		let key = db.ref('reference').push(name).key;
		return db.ref(`events/${key}`).set({
			name: name,
			size: {
				max: 10,
				min: 1
			}
		}).then(()=>key);
	},
	updateEvent:function(id, properties){
		db.ref(`event/${id}`).update(properties)
	},
	updateTeam:function(event, update, cb){
		db.ref(event+'/teams').update(update)
	},
	loadEvent:function(eventTitle){
		db.ref(eventTitle).on('value', (snapshot) => {
			return snapshot.val()
		})
	},
	eventExist:async function(name){
		function find(obj, cb){
			for (var key in obj){
				var val = obj[key];
				if(cb(val))
					return val
			}
			return null
		}
		let snapshot = await db.ref('/events').once('value');
		return !! find(snapshot.val(), record=>record === name);
	},
}

