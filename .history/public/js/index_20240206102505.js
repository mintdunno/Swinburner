const playButton = document.getElementById("play-button")
playButton.addEventListener('click', () => {
   window.location.href = '/play';
});

window.onload = function () {
   document.getElementById("my_audio").play();
}