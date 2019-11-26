window.onload = function () {


  const startButton = document.querySelector('.start-btn')
  const nextButton = document.querySelector('.next-btn')
  const questionBox = document.querySelector('#question-container')
  const questionElement = document.querySelector('#question')
  const answerElement = document.querySelector('#answer-buttons')
  const gradeButton = document.querySelector('#button')
  // let currentQuestion;
  
  

  // function sample() {
  // async function sample(evt) {
  //   let results = await axios.get("https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players")

    
    

    // console.log(results)
  startButton.addEventListener('click', startQuiz)
    // nextButton.addEventListener('click', function () {
    //   currentQuestion += 1;
      // nextQuestion();
// }
//     )
  // }

  // sample();


  gradeButton.addEventListener('click', grade)

  console.log(document.querySelector('.question1').value)

  function startQuiz(evt) {
    evt.preventDefault()
    console.log('Game started')
    startButton.classList.add('hide')
    questionBox.classList.remove('hide')

    // currentQuestion = 0
    // setNextQuestion()
  }





  // function setNextQuestion() {
  //   resetState()
  //   nextQuestion()
  // }

  // function nextQuestion(question) {
    // questionElement.innerText = multipleChoice[currentQuestion].question
    // multipleChoice[currentQuestion].answers.forEach(answer => {
    //   const button = document.createElement('button')
    //   button.innerText = answer.text
    //   button.classList.add('btn')
    //   if (answer.correct) {
    //     button.dataset.correct = answer.correct
    //   }
    //   button.addEventListener('click', selectChoice)
    //   answerElement.appendChild(button)
    // })
  // }

  // function resetState() {
  //   nextButton.classList.add('hide')
  //   while (answerElement.firstChild) {
  //     answerElement.removeChild(answerElement.firstChild)
  //   }
  // }


  // function selectChoice(e) {
  //   const selectedButton = e.target
  //   const correct = selectedButton.dataset.correct
  //   Array.from(answerElement.children).forEach(button => {
  //     if (multipleChoice.length > currentQuestion + 1) {
  //       nextButton.classList.remove('hide')
  //     } else {
  //       startButton.innerText = 'Restart'
  //       startButton.classList.remove('hide')
  //     }
 
  //   })
  // }

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