window.onload = function () {


  const startButton = document.querySelector('.start-btn')
  const nextButton = document.querySelector('.next-btn')

  async function sample() {
    let results = await axios.get("https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players")


    console.log(results)
    startButton.addEventListener('click', function () {
      console.log('Start button clicked')
    })
  }

  sample();


  const multipleChoice = [
    {
      question: 'What team does (key) play for?',
      answers: [
        { text: 'false', correct: false },
        { text: 'key', correct: true }
      ]
    },

    {
      question: 'What conference does (key) play in?',
      answers: [
        { text: 'key', correct: true },
        { text: 'false', correct: false }
      ]
    },

    
    
  ]

}

