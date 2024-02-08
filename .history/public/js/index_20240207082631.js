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
   hearbeat = document.getElementById('heartbeat'),
   volume = document.getElementsByClassName('volume')

playBtn.addEventListener('mouseover', function () {
   heartbeat.play();
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

ruleBtn.addEventListener('mouseover', function () {
   heartbeat.play();
}, false);

ruleBtn.addEventListener('mouseleave', function () {
   heartbeat.pause();
   heartbeat.currentTime = 0;
}, false);


