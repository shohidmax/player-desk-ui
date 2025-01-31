import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBGI20Ap911Jsn8hzvHoTonyh8NgGZ0ZD8",
    authDomain: "playerdesk-39fdc.firebaseapp.com",
    projectId: "playerdesk-39fdc",
    storageBucket: "playerdesk-39fdc.firebasestorage.app",
    messagingSenderId: "645008065528",
    appId: "1:645008065528:web:f553b86b57641409388c0d",
    measurementId: "G-FWCG41KERJ"

};
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
export default auth;
 