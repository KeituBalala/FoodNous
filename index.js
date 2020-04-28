  const myVid = document.getElementById(myVid);

  let goFS = document.getElementById("goFS");
  goFS.addEventListener("click", function() {
      if (myVid.requestFullscreen) {
        myVid.requestFullscreen();
      } else if (myVid.mozRequestFullScreen) { /* Firefox */
        myVid.mozRequestFullScreen();
      } else if (myVid.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        myVid.webkitRequestFullscreen();
      } else if (myVid.msRequestFullscreen) { /* IE/Edge */
        myVid.msRequestFullscreen();
  }
}
  
