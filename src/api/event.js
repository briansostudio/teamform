import {fb, db, auth} from './firebase'
import util from '../store/util'

let eventRefMap = {};

export default {
  async getEventList(){
    let snapshot = await db.ref(`reference`).once('value');
    return snapshot.val();
  },
  observe(eventId, callback){
    let ref = db.ref(`/events/${eventId}`);
    let func = ref.on("value", (snapshot)=> callback(snapshot.val()));
    eventRefMap[eventId] = {ref, func};
  },
  stopObserve(eventId){
    let {ref, func} = eventRefMap[eventId];
    ref.off("value",func);
  },
  async createEvent(name){
    let key = db.ref('reference').push(name).key;
    await db.ref(`events/${key}`).set({
      name: name,
      size: {
        max: 10,
        min: 1
      }
    });
    return key;
  },
  async updateEvent(eventId, properties){
    await db.ref(`events/${eventId}`).update(properties);
  },
  async getEvent(eventTitle){
    let snapshot = await db.ref(eventTitle).once('value');
    return snapshot.value;
  },
  eventExist:async function(name){
    let snapshot = await db.ref('/events').once('value');
    return !! util.find(snapshot.val(), record=>record === name);
  },
}
