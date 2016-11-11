import fb from './firebase'

const db = fb.database()
const auth = fb.auth()

export default {
	register: function(user, cb){
		auth.createUserWithEmailAndPassword(user.email, user.password).then( () => cb() ).catch((error) => {
			cb(error)
		})
	},
	login:function(user, cb){
		auth.signInWithEmailAndPassword(user.email, user.password).then( () => cb() ).catch((error) => {
			cb(error)
		})
	},
	getTeamsFromEvent: function(eventId,cb){
		db.ref(eventId).on('value', (snapshot) => {
			cb(snapshot.val(), null)
		}, (error) => {
			cb(null, error)
		})
	},
	getAllEvents:function(cb){
		db.ref('events').on('value', (snapshot) => {
			cb(snapshot.val(), null)
		}, (error) => {
			cb(null, error)
		})
	},
	createEvent:function(name){
		let key = db.ref('events').push(name).key;
		return db.ref(key).update({
			name: name,
			size: {
				max: 10,
				min: 1
			}
		}).then(()=>key);
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
	}
}

