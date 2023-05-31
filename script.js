// JavaScript code
const images = document.querySelectorAll('.storage img');

images.forEach((image, index) => {
  const descriptionText = getItemDescription(index);

  image.addEventListener('mouseover', () => {
    showDescriptionTooltip(image, descriptionText);
  });

  image.addEventListener('mouseout', () => {
    hideDescriptionTooltip();
  });
});

function getItemDescription(index) {
  const descriptions = [
    "It's a shallow container. It's empty.",
    "It's a wilted green onion.",
    "It's a kitchen knife."
  ];

  return descriptions[index];
}

function showDescriptionTooltip(image, descriptionText) {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerText = descriptionText;

  const imageRect = image.getBoundingClientRect();
  const imageCenterX = imageRect.left + imageRect.width / 2;
  const imageCenterY = imageRect.top + imageRect.height / 2;

  tooltip.style.left = `${imageCenterX}px`;
  tooltip.style.top = `${imageCenterY}px`;

  document.body.appendChild(tooltip);
}

function hideDescriptionTooltip() {
  const tooltip = document.querySelector('.tooltip');
  if (tooltip) {
    tooltip.remove();
  }
}

function showTextBox() {
  document.getElementById("textbox").style.display = "block";
}
function hideTextBox() {
  document.getElementById("textbox").style.display = "none";
}
        function showTextBox2() {
    document.getElementById("textbox2").style.display = "block";
  }
  function hideTextBox2() {
    document.getElementById("textbox2").style.display = "none";
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

