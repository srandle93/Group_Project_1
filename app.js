// var config = {
//     apiKey: "AIzaSyCuQlejOJP3_nuKFmmJ08WUwrfcIvpJdPs",
//     authDomain: "group-project1-48136.firebaseapp.com",
//     databaseURL: "https://group-project1-48136.firebaseio.com",
//     projectId: "group-project1-48136",
//     storageBucket: "",
//     messagingSenderId: "145399818320"
//   };

// firebase.initializeApp(config);
// var database = firebase.database();
 
//         // Grabs user input
//  var userAnswer = $("#answer-name-input").val().trim();
// //  var userName = $("#userName-input").val().trim();
// //  var userPassword = $("#password-input").val().trim();

//    // Creates local "temporary" object for holding user data
//   //  var newUser = {
//   //   name: userName,
//   //   password: userPassword,
//   // };

//  // Uploads user data to the database
//   database.ref().push(newUser);

  var queryURL = "https://opentdb.com/api.php?amount=10" +
        question;
 
  var questionBtn = $("<button id='get-question'>").text("New Question");

    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
  //  To gather and display question and where to display question
    $(questionBtn).on("click", function(event){
    var questionDiv = $("#questionDiv").val();
    var question = response.question;
    questionDiv.append(question);
    });
    
    // To collect answer and not show it. Instead we want to 
    // make an if else statement to add or not add points.
    $("#submit-btn").on("click", function(event){
      event.preventDefult();
      var answerDiv = $("#answerDiv").val();
      var answer = response.answer;
      
    });
    

  })
