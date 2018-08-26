const config = {
    apiKey: "AIzaSyC8hpnmehoFY4yxN5YTkKa6eJ6LGU23ECc",
    authDomain: "login-1a402.firebaseapp.com",
    databaseURL: "https://login-1a402.firebaseio.com",
    projectId: "login-1a402",
    storageBucket: "",
    messagingSenderId: "295742356838"
  };
    firebase.initializeApp(config);

      // Const user is to give the word user a variable.
      
      // Push child of login onto firebase
          // // database.ref(login).child(user).push().setValue("user");{
          //   console.log(snapshot.val().child());
          // };

    database = firebase.database();
          
      
      // Shows what child is added in console. Adds email
      // value onto snapshot.
        // database.ref().on("child_added", function(snapshot){
        //   console.log(snapshot.val().email);
        //   $("#email").text(snapshot.val().email);
            
        // });

 
    var userDataref = firebase.database().ref("user").orderByKey();
    
    userDataref.once("value").then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          var emailValue = childSnapshot.val().emailVal;
          

          $("#email").append(emailVal);
         
        })

    })
    // database.ref().set({
    //   question: triviaQuestion, 
    //   answers: allAnswers
    // });
  
    // gp = new Quiz-Group-2("login-1a402");
    // sampleGroup = {emailVal:"", newImage:""};

  // $("#login").on("click", function(){
  //   event.preventDefault();
  //   userInfo.on("child_added", function(snapshot){
  //   }
  //   database.set().ref();


// })