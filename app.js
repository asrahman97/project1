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

    if (question1.checked == true) {
      score++;
      console.log('q1 is right')
    } else {
      console.log('q1 is wrong')
    }
    if (question2.checked == true) {
      score++;
    }
    if (question3.checked == true) {
      score++;
    }

    const gifs = ['https://media.giphy.com/media/IW8yMvU2iAN8c/giphy.gif', 'https://media.giphy.com/media/NWZ13Q6pwwfi8/giphy.gif', 'https://media.giphy.com/media/l2YWs9vhysuUzdZAc/giphy.gif', 'https://media.giphy.com/media/l0MYHiW8ozFLda6ze/giphy.gif']
    
    const greeting = ['Scrub', 'A for Effort', 'Ball is almost Life', 'You da GOAT']

    document.querySelector('.greeting').innerHTML = greeting[score];
    document.querySelector('.correct').innerHTML = (`You got ${score} correct`);
    document.querySelector('.gif').src = gifs[score];
    document.querySelector('.restart-btn').classList.remove('hide')
    console.log(score);
  }


 

 

  // function resetState() {
  //   nextButton.classList.add('hide')
  //   while (answerElement.firstChild) {
  //     answerElement.removeChild(answerElement.firstChild)
  //   }
  // }

 

}