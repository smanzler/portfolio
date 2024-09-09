const typewriter = document.getElementById("typewriter");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const headerLogo = document.getElementById("header-logo");
const phrases = ["Software Developer", "Student", "Hard Worker"];
let phraseIndex = 0;

function changePhrase() {
  typewriter.textContent = phrases[phraseIndex];

  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(changePhrase, 8000);

changePhrase();

window.addEventListener("scroll", (e) => {
  console.log(e);
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    console.log("scroll");
    header.style["background-color"] = "#0000001a";
  } else {
    header.style["background-color"] = "transparent";
  }
});
