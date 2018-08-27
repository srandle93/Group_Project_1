database = firebase.database();

$("#nextQuestion").hide();

let score = 0;
let triviaQuestion = "";
let allAnswers;
let results = { question: "",
          correctAnswer: "",
          incorrectAnswer: ""
        }
//let user = "";

const queryURL2 = "https://robohash.org/" + email + "?set=set2";
const queryURL = "https://opentdb.com/api.php?amount=1&type=multiple";
database.ref().set({
    score: score
});

//Generate a question with answers
const questions = () => {
        $("#nextQuestion").hide();


        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
            // Store question, correct answer, incorrect answers
    const triviaQuestion = response.results[0].question;
    const correctAnswer = response.results[0].correct_answer;
    const incorrectAnswer = response.results[0].incorrect_answers;
    // Duplicate the incorrectAnswer array and then push the correctAnswer to it
    const allAnswers = Array.from(incorrectAnswer);
        allAnswers.push(correctAnswer);
        allAnswers.correctAnswer = correctAnswer;
        console.log(correctAnswer);
    //Shuffle the array of allAnswers
    const shuffle = (array) => {
        var i = 0
          , j = 0
          , temp = null
      
        for (i = array.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1))
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
      }
      shuffle(allAnswers);

        //Gather and display question in #question-display
        $("#question-display").html(triviaQuestion);

        $("#answer-display").empty();

        // Display answers in #answer-display as buttons
        for(var i = 0; i < allAnswers.length; i++){


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
        $(".answer-option").on("click", function(){
        userAnswer = $(this).text();
        console.log(userAnswer);

        //If correctAnswer is clicked on, add 1 point to score
         if (userAnswer === correctAnswer) {
            score++;
            database.ref().set({
                score: score
            });
            console.log(score);
            $(this).addClass("green");
            $(".answer-option").off('click');
            $("#nextQuestion").show();
            nextQuestion();

        } 
        // If incorrectAnswer is clicked on, alert they were wrong.
        else {
            score--;
            database.ref().set({
                score: score
            });
            console.log(score);
            $(this).addClass("red");
            $(".correct").addClass("green");
            $(".answer-option").off('click');
            $("#nextQuestion").show();
            nextQuestion();
        }

        });
        });
        
        
}

const nextQuestion = () => {
    $("#nextQuestion").on("click", () => {
        $("#answer-display").empty();
        $("#question-display").empty();
        questions().remove();
    
    })
};

questions();


$.ajax({
    url: queryURL2,
    method: "GET"
    }).then(function (){
        $("#login").on("click", function(event){
            let emailVal = $("#email").val().trim().split("@")[0];

            let newImage = $('<img src="https://robohash.org/' + emailVal +'.png?size=60x60">');

            event.preventDefault();
            console.log(emailVal);
            $("#avatar").append(newImage);
            $("#emailDisplay").text(emailVal);
            newImage.show();
            $("#emailDisplay").show();
        })

        $("#signUp").on("click", function(event){
            let emailVal = $("#email").val().trim().split("@")[0];

            let newImage = $('<img src="https://robohash.org/' + emailVal +'.png?size=60x60">');

            event.preventDefault();
            console.log(emailVal);
            $("#avatar").append(newImage);
            $("#emailDisplay").text(emailVal);
            newImage.show();
            $("#emailDisplay").show();
        })

        $("#logOut").on("click", function(event){
            event.preventDefault();
            $("#avatar").empty();
            $("#emailDisplay").hide();
        })
})

const userScore = ref().child("score");

userScore.on("value", function(snapshot) {
    if (snapshot.child("score").exists())
        score = snapshot.val().score
        $("#score").text(snapshot.val().score);
        console.log(snapshot.val().score);
})

function userData(email, score) {
    firebase.database().ref("users/" + email).set({
        email: email,
        score: score
    });
}




