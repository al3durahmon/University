var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".form__input");
var elSelect = elForm.querySelector(".form__select");
var maxBall = 180;
var minBall = 0;
console.log = alert("Welcome to - AU University");

var elOutput = document.querySelector(".output__result");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputValue = Number(elInput.value);
  var selectValue = Number(elSelect.value);

  if (inputValue < 0) {
    elOutput.textContent = "Please enter a higher number!";
  }
  else if (inputValue >= selectValue && inputValue <= maxBall) {
    elOutput.setAttribute("class", "output__result-green");
    elOutput.textContent = "You have been admitted to our Unviersity!";
  }
  else if (inputValue <= selectValue && inputValue >= minBall) {
    elOutput.setAttribute("class", "output__result-red");
    elOutput.textContent = "You couldn't get in, good luck!!!";
  }
  else if (isNaN(selectValue)) {
    
    elOutput.textContent = "Choose a direction";
  }
  else if (inputValue > maxBall) {
    
    elOutput.textContent = "ERROR";
  }

})