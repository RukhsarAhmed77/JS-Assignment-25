var questions = [
  {
    question: "What does CSS stand for?",
    option1: "Cascading Style Sheets",
    option2: "Creative Style Sheets",
    option3: "Computer Style Sheets",
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to define an internal CSS?",
    option1: "<style>",
    option2: "<css>",
    option3: "<script>",
    correctAnswer: "<style>",
  },
  {
    question: "Which is the correct syntax for referring to an external style sheet?",
    option1: "<link rel='stylesheet' href='styles.css'>",
    option2: "<stylesheet>styles.css</stylesheet>",
    option3: "<style src='styles.css'>",
    correctAnswer: "<link rel='stylesheet' href='styles.css'>",
  },
  {
    question: "Which property is used to change the background color?",
    option1: "color",
    option2: "bgcolor",
    option3: "background-color",
    correctAnswer: "background-color",
  },
  {
    question: "How do you add a shadow to an element in CSS?",
    option1: "box-shadow: 10px 10px 5px grey;",
    option2: "shadow: 10px 10px 5px grey;",
    option3: "element-shadow: 10px 10px 5px grey;",
    correctAnswer: "box-shadow: 10px 10px 5px grey;",
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    option1: "font-color",
    option2: "text-color",
    option3: "color",
    correctAnswer: "color",
  },
  {
    question: "How do you make a list that lists its items with squares?",
    option1: "list-style-type: square;",
    option2: "list: square;",
    option3: "list-type: square;",
    correctAnswer: "list-style-type: square;",
  },
  {
    question: "Which property is used to make text bold in CSS?",
    option1: "text-style: bold;",
    option2: "font-weight: bold;",
    option3: "font-style: bold;",
    correctAnswer: "font-weight: bold;",
  },
  {
    question: "What is the default position value in CSS?",
    option1: "absolute",
    option2: "relative",
    option3: "static",
    correctAnswer: "static",
  },
  {
    question: "Which property in CSS is used to change the font of an element?",
    option1: "font-family",
    option2: "font-style",
    option3: "font-weight",
    correctAnswer: "font-family",
  },
];


var ques = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var button = document.getElementById("btn");
var index = 0;
var score = 0;

function nextQuestion() {
  var options = document.getElementsByName("answer");
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      var selected = options[i].value;
      var userAnswer = questions[index - 1][`option${selected}`];
      var correctAns = questions[index - 1].correctAnswer;
      if (userAnswer === correctAns) {
        score++;
      }
      options[i].checked = false;
    }
  }

  if (index >= questions.length) {
    Swal.fire({
      icon: "success",
      text: "Your result is ready",
      title: `${(score / questions.length) * 100}%`,
      showConfirmButton: false,
      allowOutsideClick: false,
      timer:4000,
    });
    setInterval(() => {
      window.location.href = "/home/home.html";
    }, 3000);
  } else {
    ques.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;
    index++;
    button.disabled = true;
    sec = 20;
  }
}

function enableBtn() {
  button.disabled = false;
}


var sec = 20;

var timer = document.getElementById("timer");
var interval = setInterval(function () {
  timer.innerHTML = `${'Next Question in : ' + sec}`;
  sec--;

  if (sec < 0) {
    if (index >= questions.length) {
      clearInterval(interval);
    } else {
      nextQuestion();
    }
    sec = 20;
  }
}, 1000);
nextQuestion();