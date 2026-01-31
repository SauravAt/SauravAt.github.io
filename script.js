/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* Smooth scroll */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* Fun reasons */
const reasons = [
  "You laugh like you mean it",
  "You make chaos feel manageable",
  "You remember small things",
  "You make ordinary days lighter",
  "You listen with your whole heart",
  "You exist (that’s enough)"
];

function generateReason() {
  const r = Math.floor(Math.random() * reasons.length);
  document.getElementById("reason").innerText = reasons[r];
}

/* Typing effect */
const letterText = `
I was not looking for you when you met me,
but now with you, it feels like a part of me
always wanted to have you.
--My heart stopped searching for anything 
else the moment it found you.


I don’t know what the future looks like.
I don’t pretend to have answers.

But I know this—
when the day is heavy,
you make it lighter.

I love you in choosing you—
again,
and again,
and again.
`;

let index = 0;

function startTyping() {
  if (index < letterText.length) {
    document.getElementById("typed-text").innerHTML += letterText.charAt(index);
    index++;
    setTimeout(startTyping, 85);
  }
}

/* Secret */
function revealSecret() {
  document.getElementById("hidden-text").style.display = "block";
}
/* Background Music */
const music = document.getElementById("bg-music");

function startExperience() {
  scrollToSection('timeline');
  fadeInMusic();
}

function fadeInMusic() {
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.4) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}
const memories = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg"
];

function createMemory() {
  const memory = document.createElement("div");
  memory.className = "memory";

  const img = memories[Math.floor(Math.random() * memories.length)];
  memory.style.backgroundImage = `url(${img})`;

  memory.style.left = Math.random() * 80 + 10 + "%";
  memory.style.top = Math.random() * 60 + 20 + "%";

  document.body.appendChild(memory);

  setTimeout(() => {
    memory.remove();
  }, 8000);
}

/* Slow & dreamy frequency */
setInterval(createMemory, 6000);


