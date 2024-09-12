const typewriter = document.getElementById("typewriter");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const headerLogo = document.getElementById("header-logo");
const progress = document.getElementById("progress-bar");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelectorAll(".nav-drawer a");
const body = document.body;

const backdrop = document.createElement("div");

backdrop.classList.add("backdrop");
body.appendChild(backdrop);

const phrases = ["Software Developer", "Student", "Hard Worker"];
let phraseIndex = 0;
let totalHeight = document.body.scrollHeight - window.innerHeight;

function changePhrase() {
  typewriter.textContent = phrases[phraseIndex];

  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(changePhrase, 6000);

changePhrase();

window.addEventListener("scroll", (e) => {
  const scrollPosition = window.scrollY;
  const progressHeight = (scrollPosition / totalHeight) * 100;
  progress.style.height = progressHeight + "%";

  if (scrollPosition > 50) {
    header.style.backgroundColor = "#0000004d";
    header.style.backdropFilter = "blur(5px)";

    headerLogo.style.opacity = 100;
  } else {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";

    headerLogo.style.opacity = 0;
  }
});

menuIcon.addEventListener("click", () => {
  body.classList.toggle("drawer-open");
});

backdrop.addEventListener("click", () => {
  if (body.classList.contains("drawer-open")) {
    body.classList.remove("drawer-open");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("drawer-open");
  });
});
