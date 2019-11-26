window.onload = function () {


  const startButton = document.querySelector('.start-btn')
  // const nextButton = document.querySelector('.next-btn')
  const questionBox = document.querySelector('#question-container')
  // const questionElement = document.querySelector('#question')
  // const answerElement = document.querySelector('#answer-buttons')
  const gradeButton = document.querySelector('#button')
  let score = 0; 

  const question1 = document.querySelector('.question1');
  const question2 = document.querySelector('.question2');
  const question3 = document.querySelector('.question3');
  // let currentQuestion;
  
  // question1.addEventListener('click', )

  // function sample() {
  // async function sample(evt) {
  //   let results = await axios.get("https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players")

    
    

    // console.log(results)
    // nextButton.addEventListener('click', function () {
    //   currentQuestion += 1;
      // nextQuestion();
// }
//     )
  // }

  // sample();


  

  // console.log(question1.checked)


  startButton.addEventListener('click', startQuiz)

  function startQuiz(evt) {
    evt.preventDefault();
    console.log('Game started');
    startButton.classList.add('hide');
    questionBox.classList.remove('hide');

    // currentQuestion = 0
    // setNextQuestion()
  }

  // console.log(document.querySelector('.question1'))
  // console.log(document.querySelector('.question1').value)


  gradeButton.addEventListener('click', grade);

  function grade() {

    if (question1.value.checked === "true1") {
      score++;
      console.log('q1 is right')
    } else {
      console.log('q1 is wrong')
    }
    if (question2.value === "true2") {
      score++;
    }
    if (question3.value === "true3") {
      score++;
    }

    const gifs = ['https://media.giphy.com/media/IW8yMvU2iAN8c/giphy.gif', 'https://media.giphy.com/media/NWZ13Q6pwwfi8/giphy.gif', 'https://media.giphy.com/media/l2YWs9vhysuUzdZAc/giphy.gif', 'https://media.giphy.com/media/l0MYHiW8ozFLda6ze/giphy.gif']
    
    const greeting = ['Scrub', 'A for Effort', 'Ball is almost Life', 'You da GOAT']

    document.querySelector('.greeting').innerHTML = greeting[score];
    document.querySelector('.correct').innerHTML = (`You got ${score} correct`);
    document.querySelector('.gif').src = gifs[score]
    console.log(score);
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

  // const multipleChoice = [
  //   {
  //     question: 'What team does (key) play for?',
  //     answers: [
  //       { text: 'false', correct: false },
  //       { text: 'key', correct: true }
  //     ]
  //   },

  //   {
  //     question: 'What conference does (key.eastTeam) play in?',
  //     answers: [
  //       { text: 'east', correct: true },
  //       { text: 'west', correct: false }
  //     ]
  //   },

  //   {
  //     question: 'What division do the (key) play in?',
  //     answers: [
  //       { text: 'key', correct: true },
  //       { text: 'false', correct: false }
  //     ]
  //   },

  //   {
  //     question: 'What conference does (key.west) play in?',
  //     answers: [
  //       { text: 'west', correct: true },
  //       { text: 'east', correct: false }
  //     ]
  //   },

  //   {
  //     question: 'What team does (key) play for?',
  //     answers: [
  //       { text: 'false', correct: false },
  //       { text: 'key', correct: true }
  //     ]
  //   }


    
  // ]

}