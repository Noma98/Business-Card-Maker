import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//initializeApp을 하게 되면 firebase.app.App이라는 인터페이스를 리턴 받는다. 
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
//전체적인 firebaseApp을 export하기 보다는 필요한 것만 export해서 각각의 모듈에서 각각의 서비스에서 필요한 것만을 import해 갈 수 있도록 만들었다.
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();