    function showBox(boxId) {
      var boxes = document.getElementsByClassName("box");
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
      }
      document.getElementById(boxId).style.display = "block";
    }
    showBox("box1"); // Show the initial box on page load
