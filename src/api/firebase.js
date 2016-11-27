import Firebase from 'firebase';
import {API_KEYS} from './credentials';
const fb = Firebase.initializeApp(API_KEYS);
const db = fb.database();
const auth = fb.auth();
const auth_providers = [new Firebase.auth.GoogleAuthProvider(), new Firebase.auth.GithubAuthProvider()]

export default fb;
export {
  fb, db, auth, auth_providers
}
