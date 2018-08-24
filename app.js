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

var queryURL = "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";
// var question = [];
// var correctAnswer = [];
// var incorrectAnswer = [];


var results = { question: "",
          correctAnswer: "",
          incorrectAnswer: ""
}
//  var question = queryURL.question[i];
// var questionBtn = document.getElementById("newQuestion");


$.ajax({
url: queryURL,
method: "GET"
}).then(function(response){

    // Store question, correct answer, incorrect answers
    var triviaQuestion = response.results[0].question;
    var correctAnswer = response.results[0].correct_answer;
    var incorrectAnswer = response.results[0].incorrect_answers;
    var allAnswers = correctAnswer + ",".concat(incorrectAnswer);

    //  To gather and display question and where to display question
    $("#newQuestion").click(function(){
    $("#question-display").text(triviaQuestion);
    for(var i = 0; i < results.question.length; i++){
    $("#question-display").text(triviaQuestion);
    }

    // Display questions in #answer-display
    $("#answer-display").text(allAnswers);

});

// To collect answer and not show it. Instead we want to 
// make an if else statement to add or not add points.
$("#submit").on("click", function(event){
event.preventDefult();
var answerDiv = $("#answerDiv").val();
var answer = response.answer;

});
})