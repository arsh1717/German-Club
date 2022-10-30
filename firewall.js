const firebaseConfig = {
    apiKey: "AIzaSyDKicRUwgzl9n8v4Z_xcqJCUDoYxdBVgd8",
    authDomain: "germanclub-5fc6c.firebaseapp.com",
    databaseURL: "https://germanclub-5fc6c-default-rtdb.firebaseio.com",
    projectId: "germanclub-5fc6c",
    storageBucket: "germanclub-5fc6c.appspot.com",
    messagingSenderId: "1089369706594",
    appId: "1:1089369706594:web:0d34509157c75b8464813b",
    measurementId: "G-EXS770MHN8"
  };
// initialize firbase//
  firebase.initializeApp(firebaseConfig);

  //reference

  var ContactFormDB= firebase.database().ref('ContactForm');

  document.getElementById('contactForm').addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('username');
    var emailid = getElementVal('email');
    var mobile = getElementVal('mobile');
    var comment = getElementVal('comment');
  }

const getElementVal = (id) => {
    return document.getElementById(id).value;

}