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
      if (error) {
        $("#password").val("");
        $("#password")
          .attr("placeholder", "Incorrect Password OR Email not Registered")
          .addClass("form-val");
        $("#avatar").empty();
      }
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
      if (error) {
        $("#password").val("");
        $("#email").val("");
        $("#email")
          .attr("placeholder", "Email Already Registered OR Invalid Email")
          .addClass("form-val");
        $("#avatar").empty();
      }
    });
  });
  //Logout Event
  $("#logOut").click(event => {
    event.preventDefault();
    firebase.auth().signOut();
    $("#password").val("");
    $("#password")
      .attr("placeholder", "Password")
      .removeClass("form-val");
  });
  //Verify status of login/logout
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      $("#logOut").show();
      $(".quiz").show();
      $("#form").hide();
    } else {
      $("#logOut").hide();
      $(".quiz").hide();
      $("#form").show();
    }
  });
  //Validate form
  $("#form").validate({
    rules: {
      email: {
        required: true,
        email: true,
        accept: "/^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/"
      }
    }
  });
});
