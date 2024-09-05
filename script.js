const typewriterElement = document.getElementById("typewriter");
const phrases = ["Software Developer", "Student", "Hard Worker"];
let phraseIndex = 0;

function changePhrase() {
  typewriterElement.textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(changePhrase, 8000);

changePhrase();
