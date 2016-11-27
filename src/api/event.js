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
  async authenticateAsOrganizer(eventId, password){
    let ref = db.ref(`/events/${eventId}/adminPassword`)
    let snapshot = await ref.once('value')
    if(snapshot.val() == password){
      return true
    }
    else return false
  },
  async createEvent(eventObj){
    let key = (await db.ref('reference').push(eventObj.name)).key;
    await db.ref(`events/${key}`).set(eventObj);
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
