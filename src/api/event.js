import {fb, db, auth} from './firebase'

let eventRefMap = {};

export default {
  observe(eventId, callback){
    let ref = db.ref(`/events/${eventId}`);
    let func = ref.on("value", (snapshot)=> callback(snapshot.val()));
    eventRefMap[eventId] = {ref, func};
  },
  stopObserve(eventId){
    let {ref, func} = eventRefMap[eventId];
    ref.off("value",func);
  }
}
