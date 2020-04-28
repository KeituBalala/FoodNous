const myVid = document.getElementById("myVid");
function openFullscreen() {
  if (myVid.requestFullscreen) {
    myVid.requestFullscreen();
  } else if (myVid.mozRequestFullScreen) { /* Firefox */
    myVid.mozRequestFullScreen();
  } else if (myVid.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    myVid.webkitRequestFullscreen();
  } else if (myVid.msRequestFullscreen) { /* IE/Edge */
    myVid.msRequestFullscreen();
  }
} 
