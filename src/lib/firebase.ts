import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyCJJbamvIo6WxIo51tc2GoYEz7OLNcKxCw',
    authDomain: 'development-v2-53228.firebaseapp.com',
    projectId: 'development-v2-53228',
    storageBucket: 'development-v2-53228.appspot.com',
    messagingSenderId: '636676061352',
    appId: '1:636676061352:web:0b91c208ab5be75def6a9d',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };

//TODO: Move to env
