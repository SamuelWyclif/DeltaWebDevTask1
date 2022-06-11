var buttonOnScreen = ["buttonA1", "buttonA2", "buttonA3", "buttonA4", "buttonB1", "buttonB2", "buttonB3", "buttonB4", "buttonC1", "buttonC2", "buttonC3", "buttonC4", "buttonD1", "buttonD2", "buttonD3", "buttonD4"];
var buttonPattern = [];
var buttonPressed = [];

var start = false;

var level = "0";

var checkAnswerCount = 0;
document.querySelector("#play").addEventListener("click", function() {
  if (!start) {
    start = true;
    patternGeneration();
    for (var i = 0; i < buttonOnScreen.length; i++) {
      var selectedButton = document.querySelectorAll(".btn")[i];
      selectedButton.addEventListener("click", function() {
        var chosenButton = this.getAttribute("id");
        buttonPressed.push(chosenButton);
        fadeButton(chosenButton);
        checkAnswer(buttonPressed.length);
      });
    }
  }
});

function patternGeneration() {
  document.querySelector("#score").innerHTML = "SCORE: "
  buttonPressed = [];
  document.querySelector("#titleStart").innerHTML = "Round " + level;
  level++;
  var randomNumber = Math.floor(Math.random() * 16);
  var randomChosenButton = buttonOnScreen[randomNumber];
  buttonPattern.push(randomChosenButton);
  fadeButton(randomChosenButton);
}
function checkAnswer(currentRound) {
  checkAnswerCount = 0;
  var currentPattern = [];
  for (var i = 0; i < buttonPattern.length; i++) {
    currentPattern[i] = buttonPattern[i];
  }
  for (var i = 0; i < buttonPressed.length; i++) {
    if (currentPattern.includes(buttonPressed[i])) {
      checkAnswerCount++;
      var index = currentPattern.indexOf(buttonPressed[i]);
      currentPattern.splice(index, 1);
      console.log("button found");
      if (checkAnswerCount === buttonPattern.length) {
        setTimeout(function() {
          patternGeneration();
        }, 1000);
      }
    } else {
      gameOver();
    }
  }
}

function fadeButton(currentButton) {
  console.log(currebtbuttonId = document.getElementById(currentButton).getAttribute("id"));
  document.querySelector("#" + currentButton).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("#" + currentButton).classList.remove("pressed");
  }, 100);

}

function gameOver() {
  document.querySelector("#titleStart").innerHTML = "Click on PLAY button to Play Again";
  document.querySelector("#score").innerHTML = "SCORE: " + level;
  level = "0";
  start = false;
  buttonPattern = [];
}