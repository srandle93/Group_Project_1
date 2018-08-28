$(document).ready(() => {
  /* Questions API */
  //Hides next button until answered
  $("#nextQuestion").hide();
  //Grabbing firebase database
  database = firebase.database();
  //score counter
  let score = 0;
  //API urls
  const queryURL2 = "https://robohash.org/" + email + "?set=set2";
  const queryURL = "https://opentdb.com/api.php?amount=1&type=multiple";
  //Generate a question with answers
  const questions = () => {
    //Hides next button until answered
    $("#nextQuestion").hide();
    //ajax call for open trivia database
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Store question, correct answer, incorrect answers
      const triviaQuestion = response.results[0].question;
      const correctAnswer = response.results[0].correct_answer;
      const incorrectAnswer = response.results[0].incorrect_answers;
      // Duplicate the incorrectAnswer array and then push the correctAnswer to it
      const allAnswers = Array.from(incorrectAnswer);
      allAnswers.push(correctAnswer);
      allAnswers.correctAnswer = correctAnswer;
      //function to shuffle the array of allAnswers
      const shuffle = array => {
        var i = 0,
          j = 0,
          temp = null;

        for (i = array.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1));
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      };
      //call shuffle of answers array
      shuffle(allAnswers);
      //Gather and display question in #question-display
      $("#question-display").html(triviaQuestion);
      //hide last answers
      $("#answer-display").empty();
      // Display answers in #answer-display as buttons
      for (var i = 0; i < allAnswers.length; i++) {
        var option = document.createElement("button");
        $("#answer-display").append(option);
        option.innerHTML = allAnswers[i];
        // Give each button a class of .answer-option by creating a class in CSS and then .addClass
        $(option).addClass("answer-option");
        if (option.innerHTML === correctAnswer) {
          $(option).addClass("correct");
        }
      }
      //Validate Answers
      $(".answer-option").on("click", function() {
        userAnswer = $(this).text();
        //If correctAnswer is clicked on, add 1 point to score
        if (userAnswer === correctAnswer) {
          score++;
          $("#score").empty(score);
          $("#score").append(score);
          $(this).addClass("green");
          $(".answer-option").off("click");
          $("#nextQuestion").show();
          nextQuestion();
        }
        // If incorrectAnswer is clicked on, alert they were wrong.
        else {
          score--;
          $("#score").empty(score);
          $("#score").append(score);
          $(this).addClass("red");
          $(".correct").addClass("green");
          $(".answer-option").off("click");
          $("#nextQuestion").show();
          nextQuestion();
        }
      });
    });
  };
  //Next question button
  const nextQuestion = () => {
    $("#nextQuestion").on("click", () => {
      $("#answer-display").empty();
      $("#question-display").empty();
      //remove is not valid, however we added it because the questions multiplied and we
      //could not avoid that in time for project submission.
      questions().remove();
    });
  };
  //Call question function
  questions();
  /* Avatar API */
  //ajax call for avatar api
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function() {
    //Login to show avatar
    $("#login").on("click", function(event) {
      let emailVal = $("#email")
        .val()
        .trim()
        .split("@")[0];
      let newImage = $(
        '<img src="https://robohash.org/' + emailVal + '.png?size=60x60">'
      );
      event.preventDefault();
      $("#avatar").append(newImage);
      $("#avatar").show(newImage);
      $("#score").show();
    });
    //avatar show on sign up
    $("#signUp").on("click", function(event) {
      let emailVal = $("#email")
        .val()
        .trim()
        .split("@")[0];
      let newImage = $(
        '<img src="https://robohash.org/' + emailVal + '.png?size=60x60">'
      );
      event.preventDefault();
      $("#avatar").append(newImage);
      $("#score").show();
    });
    //avatar on log out
    $("#logOut").on("click", function(event) {
      event.preventDefault();
      $("#avatar").empty();
      $("#score").empty();
    });
  });
});
