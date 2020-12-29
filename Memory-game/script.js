const toprow = document.querySelector(".toprow");
let scorelabel = document.querySelector("#scorelabel")

function startgame(){
  const gameContainer = document.getElementById("game");
  let hasFlippedCard = false;
  let firstCard, secondCard;
  let noClicking = false;
  let score = 0;

  const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
  ];

  // here is a helper function to shuffle an array
  // it returns the same array with values shuffled
  // it is based on an algorithm called Fisher Yates if you want ot research more
  function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  let shuffledColors = shuffle(COLORS);

  // this function loops over the array of colors
  // it creates a new div and gives it a class with the value of the color
  // it also adds an event listener for a click for each card
  function createDivsForColors(colorArray) {
    for (let color of colorArray) {
      // create a new div
      const newDiv = document.createElement("div");

      // give it a class attribute for the value we are looping over
      newDiv.classList.add(color);

      // call a function handleCardClick when a div is clicked on
      newDiv.addEventListener("click", handleCardClick);

      // append the div to the element with an id of game
      gameContainer.append(newDiv);
    }
  }

  // TODO: Implement this function!
  function handleCardClick(event) {
    // if noclicking is true, function returns. 
    // when true doesn't allow user to have more than two cards flipped
    if (noClicking) return;
    // if the card has been flipped, nothing will happen
    if (event.target.classList.contains("flip")) return;
    //add to score
    score++;
    scorelabel.innerHTML = `Score: ${score}`;
    //change background color of card to class name
    let selectedColor = event.target.className;
    event.target.style.backgroundColor = selectedColor;
    // add class name of flip to 1st and 2nd clicked card's class
    event.target.classList.add('flip');
    //create variable holding the total number of cards flipped (with class name flip)
    let flipCount = document.querySelectorAll('div .flip').length;
    //define first card and second card variables
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
    } else {
      hasFlippedCard = false;
      secondCard = this;
    }
      //if flipcount is less than two, function returns
    if (flipCount <2) return;
      //  if two cards have flipped and the classes do not match. 
      //  Make no change to new background color
    if (flipCount == 2 && firstCard.className == secondCard.className) {
      function matchedCards(){
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        }
        matchedCards();
      }
      //if doesn't meet the above condition, cards will flip back over removing their 
      //flip class and background color. 
      else{
        noClicking = true;
      function resetCards(){
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard.style.backgroundColor = "";
        secondCard.style.backgroundColor = "";
        noClicking = false;
      }
      // run resetFlips function after one second
      setTimeout(resetCards, 1000)}
    }
  // when the DOM loads
  createDivsForColors(shuffledColors);
}

// click to start game

toprow.addEventListener("click", function(event) {
  if (event.target.className === "startbtn") {
    // remove startbtn
    event.target.remove();
    // create reset button
    const resetbtn = document.createElement("input");
    resetbtn.classList.add("resetBtn");
    resetbtn.type = "button";
    resetbtn.value = "Reset";
    document.querySelector(".toprow").appendChild(resetbtn);
    //start the game
    startgame();

}})

toprow.addEventListener("click", function(event) {
  if (event.target.className === "resetBtn") {
    // remove resetBtn
    event.target.remove();
    score = 0;
    scorelabel.innerHTML = `Score: ${score}`;
    //create new start button
    const startbtn = document.createElement("input");
    startbtn.classList.add("startbtn");
    startbtn.type = "button";
    startbtn.value = "Start Game";
    document.querySelector(".toprow").appendChild(startbtn);
    // reset game board
    const gameContainer = document.getElementById("game");
    gameContainer.innerHTML = '';
  }
})