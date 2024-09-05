const typewriterElement = document.getElementById("typewriter");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const phrases = ["Software Developer", "Student", "Hard Worker"];
let phraseIndex = 0;

function changePhrase() {
  typewriterElement.textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(changePhrase, 8000);

changePhrase();

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    console.log("scroll");
    header.style["background-color"] = "#0000004d";
    logo.style["font-size"] = "3rem";
  } else {
    header.style["background-color"] = "transparent";
    logo.style["font-size"] = "5vw";
  }
});
