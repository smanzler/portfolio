const typewriter = document.getElementById("typewriter");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const headerLogo = document.getElementById("header-logo");
const progress = document.getElementById("progress-bar");

const phrases = ["Software Developer", "Student", "Hard Worker"];
let phraseIndex = 0;
let totalHeight = document.body.scrollHeight - window.innerHeight;

function changePhrase() {
  typewriter.textContent = phrases[phraseIndex];

  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(changePhrase, 8000);

changePhrase();

window.addEventListener("scroll", (e) => {
  console.log(e);
  const scrollPosition = window.scrollY;
  const progressHeight = (scrollPosition / totalHeight) * 100;
  console.log(progressHeight);
  progress.style.height = progressHeight + "%";

  if (scrollPosition > 50) {
    console.log("scroll");
    header.style.backgroundColor = "#0000001a";
    header.style.backdropFilter = "blur(5px)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";
  }
});
