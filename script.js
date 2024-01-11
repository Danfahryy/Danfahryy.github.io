let count = 0;
const countElement = document.getElementById("count");
let isSoundOn = true;

function increment() {
  count++;
  countElement.textContent = count;
  if (isSoundOn){
    playSound()
  }
}

function resetCount() {
    count = 0;
    countElement.textContent = count;
    const audio = new Audio('notifButton.mp3'); // Ganti 'path/to/sound.mp3' dengan path file suara yang ingin digunakan
    audio.play();
    isSoundOn = !isSoundOn;
  }

function playSound() {
    const audio = new Audio('tapButton.mp3'); // Ganti 'path/to/sound.mp3' dengan path file suara yang ingin digunakan
    audio.play();
  }

  function toggleSound() {
    const audio = new Audio('notifButton.mp3'); // Ganti 'path/to/sound.mp3' dengan path file suara yang ingin digunakan
    audio.play();
    isSoundOn = !isSoundOn;
  }