  let myVid = "../ASMR Video.mp4";

  let goFS = document.getElementById("goFS");
  goFS.addEventListener("click", function() {
      myVid.requestFullscreen();
  })