window.onload = function () {
  

  async function sample() {
    let results = await axios.get("https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players")

  
    console.log(results)
  }

  sample();
}

