//TODO: validate form email:

//Clear form once successfully logged in
//password validate aka - if not correct - give message

//Firebase
const config = {
  apiKey: "AIzaSyC8hpnmehoFY4yxN5YTkKa6eJ6LGU23ECc",
  authDomain: "login-1a402.firebaseapp.com",
  databaseURL: "https://login-1a402.firebaseio.com",
  projectId: "login-1a402",
  storageBucket: "",
  messagingSenderId: "295742356838"
};
firebase.initializeApp(config);

database = firebase.database();

$(document).ready(() => {
  

  //Click event for login button
  $("#login").click(event => {
    event.preventDefault();
    //Get email and password
    const email = $("#email")
      .val()
      .trim();
    const pass = $("#password")
      .val()
      .trim();
    const auth = firebase.auth();
    //Auth for Signing in
    auth.signInWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(`Error Code: ${errorCode} : Message : ${errorMessage}`);
      
    });
  });
  $("#signUp").click(event => {
    event.preventDefault();
    //Get email and password
    const email = $("#email")
      .val()
      .trim();
    const pass = $("#password")
      .val()
      .trim();
    const auth = firebase.auth();
    //Auth for new user sign in
    auth.createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(`Error Code: ${errorCode} : Message : ${errorMessage}`);
    });
  });
  //Logout Event
  $("#logOut").click(event => {
    event.preventDefault();
    firebase.auth().signOut();
  });
  //Verify status of login/logout
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      console.log(firebaseUser.uid);
      $("#logOut").show();
      $(".quiz").show();
    } else {
      console.log("not logged in");
      $("#logOut").hide();
      $(".quiz").hide();
    }
  });
  //Validate form
  $("#form").validate({
    rules: {
      email: {
        required: true,
        email: true,
        accept:"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}"
      }
    }
  });
});