window.onload = function () {
   document.getElementById("my_audio").play();
}

const playButton = document.getElementById("play-button")
playButton.addEventListener('click', () => {
   window.location.href = '/play';
});
window.addEventListener("DOMContentLoaded", event => {
   const audio = document.querySelector("audio");
   audio.volume = 0.2;
   audio.play();
});

