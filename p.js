const firebaseConfig = {
    apiKey: "AIzaSyDo_istTbXAiRF46ze0x_-A1q6ucPIo2lY",
    authDomain: "ensi-d1c5c.firebaseapp.com",
    databaseURL: "https://ensi-d1c5c-default-rtdb.firebaseio.com",
    projectId: "ensi-d1c5c",
    storageBucket: "ensi-d1c5c.appspot.com",
    messagingSenderId: "1016611862545",
    appId: "1:1016611862545:web:85a9be073f61dce65f99b0"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize variables
const auth=firebase.auth()
const database=firebase.database()
