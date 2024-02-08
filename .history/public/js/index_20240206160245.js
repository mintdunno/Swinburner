window.addEventListener("DOMContentLoaded", event => {
   const audio = document.querySelector("audio");
   audio.volume = 0.2;
   audio.play();
});

const playButton = document.getElementById("play-button")
playButton.addEventListener('click', () => {
   window.location.href = '/play';
});

var playBtn = document.getElementById('play-button'),
   resetBtn = document.getElementById('instruction'),
   ruleBtn = document.getElementById('rules'),
   hearbeat = document.getElementById('heartbeat')
audios = document.querySelectorAll('audio');
console.log(audios);


playBtn.addEventListener('mouseover', function () {
   [].forEach.call(audios, function (audio) {
      // do whatever
      audio.play();
   });
}, false);

playBtn.addEventListener('mouseleave', function () {
   heartbeat.pause();
   heartbeat.currentTime = 0;
}, false);

resetBtn.addEventListener('mouseover', function () {
   heartbeat.play();
}, false);

resetBtn.addEventListener('mouseleave', function () {
   heartbeat.pause();
   heartbeat.currentTime = 0;
}, false);

