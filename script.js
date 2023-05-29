  function showTextBox() {
  document.getElementById("textbox").style.display = "block";
}
function hideTextBox() {
  document.getElementById("textbox").style.display = "none";
}
const subTitleText = "Greetings and welcome to Little Plant Academia! Please choose your character.";

let typewriter = document.getElementById("typewriter");
let subTitleElement = typewriter.querySelector("p");
let subTitleIndex = 0;

function typeText() {
  if (subTitleIndex < subTitleText.length) {
    subTitleElement.textContent += subTitleText.charAt(subTitleIndex);
    subTitleIndex++;
  } else {
    return; // Stop the typing effect when all text is displayed
  }
  
  setTimeout(typeText, 50); // Adjust typing speed as desired
}

typeText();

function showBox(boxId) {
      var boxes = document.getElementsByClassName("box");
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
      }
      document.getElementById(boxId).style.display = "block";
    }
    showBox("box1"); 

