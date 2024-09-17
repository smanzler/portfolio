const typewriter = document.getElementById("typewriter");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const headerLogo = document.getElementById("header-logo");
const progress = document.getElementById("progress-bar");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelectorAll(".nav-drawer a");
const techContent = document.getElementById("tech-content");
const projectsContent = document.getElementById("projects-content");
const projectItems = document.querySelectorAll(".projects-item");
const image = document.getElementById("image");
const imageContainer = document.getElementById("image-container");
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

let screenWidth = window.innerWidth;

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
});

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

techContent.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".tech-item").forEach((item) => {
    const rect = item.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    item.style.setProperty("--mouse-x", `${x}px`);
    item.style.setProperty("--mouse-y", `${y}px`);
  });
});

projectsContent.addEventListener("mousemove", (e) => {
  imageContainer.style.opacity = 1;
  const rect = projectsContent.getBoundingClientRect();
  let x = e.clientX - rect.left + 50;
  let y = e.clientY - rect.top - 100;

  if (x > screenWidth - 700) {
    x -= 500;
  }

  imageContainer.style.left = `${x}px`;
  imageContainer.style.top = `${y}px`;
});

projectsContent.addEventListener("mouseleave", () => {
  imageContainer.style.opacity = 0;
});

projectItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const imageUrl = item.getAttribute("data-image");
    image.src = imageUrl;
  });
});
