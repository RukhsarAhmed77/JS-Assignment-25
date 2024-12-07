var questions = [
  {
    question: "What is the purpose of the `<head>` element in an HTML document?",
    option1: "To define the main content of the page",
    option2: "To contain metadata and links to external resources",
    option3: "To display a header at the top of the page",
    correctAnswer: "To contain metadata and links to external resources",
  },
  {
    question: "Which attribute is used to open a link in a new tab in HTML?",
    option1: "href",
    option2: "target",
    option3: "rel",
    correctAnswer: "target",
  },
  {
    question: "What is the correct way to include a JavaScript file in an HTML document?",
    option1: "<script src='script.js'></script>",
    option2: "<javascript src='script.js'></javascript>",
    option3: "<link src='script.js'>",
    correctAnswer: "<script src='script.js'></script>",
  },
  {
    question: "Which HTML tag is used to define a table?",
    option1: "<table>",
    option2: "<td>",
    option3: "<tr>",
    correctAnswer: "<table>",
  },
  {
    question: "Which element is used to define a navigation bar in HTML5?",
    option1: "<header>",
    option2: "<footer>",
    option3: "<nav>",
    correctAnswer: "<nav>",
  },
  {
    question: "What does the `placeholder` attribute do in an HTML `<input>` element?",
    option1: "It sets the default value of the input field",
    option2: "It provides a hint or example text in the input field",
    option3: "It validates the input field",
    correctAnswer: "It provides a hint or example text in the input field",
  },
  {
    question: "Which tag is used to embed a video in an HTML document?",
    option1: "<media>",
    option2: "<video>",
    option3: "<embed>",
    correctAnswer: "<video>",
  },
  {
    question: "How can you make a list item ordered in HTML?",
    option1: "<ol><li></li></ol>",
    option2: "<ul><li></li></ul>",
    option3: "<list><li></li></list>",
    correctAnswer: "<ol><li></li></ol>",
  },
  {
    question: "Which attribute specifies the URL of an image in an `<img>` tag?",
    option1: "href",
    option2: "src",
    option3: "alt",
    correctAnswer: "src",
  },
  {
    question: "What is the purpose of the `<footer>` tag in HTML?",
    option1: "To define navigation links",
    option2: "To contain footer content, such as copyright information",
    option3: "To define a heading for the page",
    correctAnswer: "To contain footer content, such as copyright information",
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