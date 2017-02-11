var sound = new Audio()
sound.src = "sound.mp3";

//video autoplay delay 

var video = document.getElementById("vidd");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 5000);
});

//video autoplay ends 


//gallery//
