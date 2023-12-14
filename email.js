const firebaseConfig = {
    apiKey: "AIzaSyDo_istTbXAiRF46ze0x_-A1q6ucPIo2lY",
    authDomain: "ensi-d1c5c.firebaseapp.com",
    databaseURL: "https://ensi-d1c5c-default-rtdb.firebaseio.com",
    projectId: "ensi-d1c5c",
    storageBucket: "ensi-d1c5c.appspot.com",
    messagingSenderId: "1016611862545",
    appId: "1:1016611862545:web:538eb2c5cfadbe995f99b0"
  };
  firebaseConfig.initializeApp(firebaseConfig);

  var contactFormDB = firebaseConfig.databaseURL().ref("Contact");

  document.getElementById("Contact").addEventListener("submit", submitform);

  function submitform(e){
    e.preventDefault();
  }
  const getElementVal = (id) => {
    return Document.getElementById(id).value;
  }
