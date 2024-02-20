const audio = document.getElementById("sound");
window.addEventListener("DOMContentLoaded", event => {
   audio.volume = 0.2;
   audio.play();
});

const playBtn = document.getElementById('play-button'),
   creditBtn = document.getElementById('credit'),
   ruleBtn = document.getElementById('rules'),
   hearbeat = document.getElementById('heartbeat'),
   sound = document.getElementById("sound")

var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
// Click Play Button
playBtn.addEventListener('click', () => {
   window.location.href = '/play';
});
// Click Rules Button
ruleBtn.addEventListener('click', () => {
   window.location.href = '/rule';
});
// Click Credit Button
creditBtn.addEventListener('click', () => {
   window.location.href = '/credit';
});

playBtn.addEventListener('mouseover', function () {
   heartbeat.play();
}, false);

playBtn.addEventListener('mouseleave', function () {
   heartbeat.pause();
   heartbeat.currentTime = 0;
}, false);

creditBtn.addEventListener('mouseover', function () {
   heartbeat.play();
}, false);

creditBtn.addEventListener('mouseleave', function () {
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


document.getElementById("soundbutton").addEventListener("click", function () {
   this.textContent = this.textContent === "Mute 🔇" ? "Unmute 🔈" : "Mute 🔇"; // change this to image.src if you have one
   sound.muted = !sound.muted;
})


img.onclick = function () {
   modal.style.display = "block";
   modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
