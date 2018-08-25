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
        if (error) {
          $("#password").val("");
          $("#password").attr("placeholder", "Incorrect Password OR Email not Registered").addClass('your-class');
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
          $("#email").attr("placeholder", "Email already Registered").addClass('your-class');
        }
      });
    });
    //Logout Event
    $("#logOut").click(event => {
      event.preventDefault();
      firebase.auth().signOut();
      $("#password").val("");
      $("#password").attr("placeholder", "Password").removeClass("your-class");
    });
    //Verify status of login/logout
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
        console.log(firebaseUser.uid);
        $("#logOut").show();
        $(".quiz").show();
        $("#form").hide();
      } else {
        console.log("not logged in");
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
          accept:"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}"
        }
      }
    });
  });
