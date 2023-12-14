const firebaseConfig = {
    apiKey: "AIzaSyCISYY97WCYW5bxVKPYUjp3nbHqJMkdEas",
    authDomain: "stage-1aaf0.firebaseapp.com",
    databaseURL: "https://stage-1aaf0-default-rtdb.firebaseio.com",
    projectId: "stage-1aaf0",
    storageBucket: "stage-1aaf0.appspot.com",
    messagingSenderId: "332638042607",
    appId: "1:332638042607:web:9420a554039d48072cde1a"
  };
const app= initializeApp(firebaseConfig);
export const db=getFirestore(app)