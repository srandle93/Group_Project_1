var queryURL = "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";
// var question = [];
// var correctAnswer = [];
// var incorrectAnswer = [];
var queryURL2 = "https://robohash.org/" + email + "?set=set2";

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


$.ajax({
    url: queryURL2,
    method: "GET"
    }).then(function (){
        
        const newImage = $('<img src="https://robohash.org/' + email +'.png?size=60x60">');

        $("#login").on("click", function(event){
            const emailVal = $("#email").val().trim();
            event.preventDefault();
            console.log(emailVal);
            $("#avatar").append(newImage);
            $("#emailDisplay").text(emailVal);
            newImage.show();
        })

        $("#logOut").on("click", function(event){
            event.preventDefault();
            newImage.hide();
        })
})
// To collect answer and not show it. Instead we want to 
// make an if else statement to add or not add points.
$("#submit").on("click", function(event){
event.preventDefult();
var answerDiv = $("#answerDiv").val();
var answer = response.answer;

});
})