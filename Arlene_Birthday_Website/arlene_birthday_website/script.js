const music = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "Pause music";
      musicToggle.setAttribute("aria-label", "Pause background music");
    } catch (error) {
      musicLabel.textContent = "Add jazz.mp3";
      alert("To enable the jazz player, add your MP3 file at assets/jazz.mp3.");
    }
  } else {
    music.pause();
    musicLabel.textContent = "Play music";
    musicToggle.setAttribute("aria-label", "Play background music");
  }
});

const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterPaper = document.getElementById("letterPaper");

openLetter.addEventListener("click", () => {
  letterPaper.hidden = false;
  openLetter.setAttribute("aria-expanded", "true");
  letterPaper.scrollIntoView({ behavior: "smooth", block: "center" });
});
closeLetter.addEventListener("click", () => {
  letterPaper.hidden = true;
  openLetter.setAttribute("aria-expanded", "false");
  openLetter.focus();
});

// A subtle reveal as sections enter the viewport.
const revealTargets = document.querySelectorAll(
  ".intro-heading, .intro-copy, .photo-card, .letter-side, .envelope, .finale-inner"
);
revealTargets.forEach((item) => item.classList.add("will-reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((item) => observer.observe(item));
