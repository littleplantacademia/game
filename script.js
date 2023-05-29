  function showTextBox() {
  document.getElementById("textbox").style.display = "block";
}

function hideTextBox() {
  document.getElementById("textbox").style.display = "none";
}
function showBox(boxId) {
      var boxes = document.getElementsByClassName("box");
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
      }
      document.getElementById(boxId).style.display = "block";
    }
    showBox("box1"); 

