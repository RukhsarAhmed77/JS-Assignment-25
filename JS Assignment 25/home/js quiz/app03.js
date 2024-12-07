var questions = [
  {
    question: "Which type of JavaScript language is ___?",
    option1: "Object-Oriented",
    option2: "Object-Based",
    option3: "Assembly-Language",
    correctAnswer: "Object-Based",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    option1: "// for single-line and /* */ for multi-line comments",
    option2: "# for single-line and ''' for multi-line comments",
    option3: "<!-- for comments -->",
    correctAnswer: "// for single-line and /* */ for multi-line comments",
  },
  {
    question: "What is the correct syntax for referring to an external script?",
    option1: "<script src='script.js'>",
    option2: "<script href='script.js'>",
    option3: "<script link='script.js'>",
    correctAnswer: "<script src='script.js'>",
  },
  {
    question: "How do you declare a JavaScript variable?",
    option1: "var x;",
    option2: "variable x;",
    option3: "declare x;",
    correctAnswer: "var x;",
  },
  {
    question: "Which built-in method removes the last element from an array?",
    option1: "pop()",
    option2: "shift()",
    option3: "slice()",
    correctAnswer: "pop()",
  },
  {
    question: "How can you convert a string to an integer in JavaScript?",
    option1: "parseInt()",
    option2: "toInteger()",
    option3: "int()",
    correctAnswer: "parseInt()",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    option1: "onmouseclick",
    option2: "onmouseover",
    option3: "onclick",
    correctAnswer: "onclick",
  },
  {
    question: "What is the result of `typeof null` in JavaScript?",
    option1: "object",
    option2: "null",
    option3: "undefined",
    correctAnswer: "object",
  },
  {
    question: "Which JavaScript method is used to write into an alert box?",
    option1: "window.alert()",
    option2: "alertBox()",
    option3: "msg()",
    correctAnswer: "window.alert()",
  },
  {
    question: "How do you write 'Hello, World!' in an alert box?",
    option1: "alert('Hello, World!');",
    option2: "msgBox('Hello, World!');",
    option3: "alertBox('Hello, World!');",
    correctAnswer: "alert('Hello, World!');",
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