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

// Function to update the score
function updateScore() {
    //document.querySelector("#score").innerHTML = "Score: " + score;
    //add code to update score in firebase db as well
};

var queryURL = "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";


var results = { question: "",
          correctAnswer: "",
          incorrectAnswer: ""
}

$.ajax({
url: queryURL,
method: "GET"
}).then(function(response){

    // Store question, correct answer, incorrect answers
    var triviaQuestion = response.results[0].question;
    var correctAnswer = response.results[0].correct_answer;
    var incorrectAnswer = response.results[0].incorrect_answers;
    // Duplicate the incorrectAnswer array and then push the correctAnswer to it
    var allAnswers = Array.from(incorrectAnswer);
    allAnswers.push(correctAnswer);

    //  Gather and display question and answers
    $("#newQuestion").click(function(){
        // Gather and display question in #question-display
        $("#question-display").text(triviaQuestion);
        for(var i = 0; i < results.question.length; i++){
            $("#question-display").text(triviaQuestion);
        }

        // Display answers in #answer-display as buttons
        for(var i = 0; i < allAnswers.length; i++){
            var option = document.createElement("button");
            $("#answer-display").append(option);
            option.innerText = allAnswers[i];
            // Give each button a class of .answer-option by creating a class in CSS and then .addClass
            $(option).addClass("answer-option");
        }
    });



    // On Click function to handle event when one answer button is clicked
    $(".answer-option").on("click", function(event) {
        // Prevent the form from trying to submit itself
        event.preventDefault();

        /*$(".answer-option").click(function () {
            var text = $(this).text();
            $("#input-answer").val(text);
        });*/

         // If correctAnswer is clicked on, add 1 point to score
         if (".answer-option" === correctAnswer) {
            alert("Correct!");
            score++;
            updateScore();
        } 
        // If incorrectAnswer is clicked on, alert they were wrong.
        else {
            alert("Wrong!");
        }
        
    });

});