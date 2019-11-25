window.onload = function () {


  const startButton = document.querySelector('.start-btn')
  const nextButton = document.querySelector('.next-btn')
  const questionBox = document.querySelector('#question-container')
  const questionElement = document.querySelector('#question')
  const answerElement = document.querySelector('#answer-buttons')
  let currentQuestion;
  let score = 0; 
  

  async function sample() {
    let results = await axios.get("https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players")


    console.log(results)
    startButton.addEventListener('click', startQuiz)
    nextButton.addEventListener('click', function () {
      currentQuestion += 1;
      nextQuestion();
    })
  }

  sample();

  function startQuiz() {
    console.log('Game started')
    startButton.classList.add('hide')
    questionBox.classList.remove('hide')
    currentQuestion = 0
    nextQuestion()
  }

  // function test() {

  // }

  function nextQuestion(question) {
    questionElement.innerText = multipleChoice[currentQuestion].question
  }

  function selectChoice() {

  }

  const multipleChoice = [
    {
      question: 'What team does (key) play for?',
      answers: [
        { text: 'false', correct: false },
        { text: 'key', correct: true }
      ]
    },

    {
      question: 'What conference does (key.eastTeam) play in?',
      answers: [
        { text: 'east', correct: true },
        { text: 'west', correct: false }
      ]
    },

    {
      question: 'What division do the (key) play in?',
      answers: [
        { text: 'key', correct: true },
        { text: 'false', correct: false }
      ]
    },

    {
      question: 'What conference does (key.west) play in?',
      answers: [
        { text: 'west', correct: true },
        { text: 'east', correct: false }
      ]
    },

    {
      question: 'What team does (key) play for?',
      answers: [
        { text: 'false', correct: false },
        { text: 'key', correct: true }
      ]
    }


    
  ]

}

