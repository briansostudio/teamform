import Firebase from 'firebase';
import {API_KEYS} from './credentials';
export default Firebase.initializeApp(API_KEYS)