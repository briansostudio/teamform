import Firebase from 'firebase';
import {API_KEYS} from './credentials';
const fb = Firebase.initializeApp(API_KEYS);
const db = fb.database();
const auth = fb.auth();

export default fb;
export {
  fb, db, auth
}
