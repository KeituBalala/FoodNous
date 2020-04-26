let vid = document.getElementById("myVideo"); 

const button = document.body.children[1]; console.log(button);

button.addEventListener('Click', function playVid() { 
  vid.play(); 
} 

const button2 = document.body.children[1]; console.log(button2);

button2.addEventListener('Click',function pauseVid() { 
  vid.pause(); 
} 