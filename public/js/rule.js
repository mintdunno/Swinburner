const audio = document.getElementById("sound");
window.addEventListener("DOMContentLoaded", event => {
    audio.volume = 0.2;
    audio.play();
});

const backBtn = document.getElementById('backBtn')

backBtn.addEventListener('mouseover', function () {
    heartbeat.play();
}, false);

backBtn.addEventListener('mouseleave', function () {
    heartbeat.pause();
    heartbeat.currentTime = 0;
}, false);

backBtn.addEventListener('click', () => {
    window.location.href = '/';
});