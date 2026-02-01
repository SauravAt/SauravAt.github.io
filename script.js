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
  }, 14000);
}

/* Slow & dreamy frequency */
setInterval(createMemory, 12000);

const star = document.getElementById("easter-star");
const portal = document.getElementById("secret-portal");
const canvas = document.getElementById("constellation");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Heart math points
const heartPoints = [];
for (let t = 0; t < Math.PI * 2; t += 0.22) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);

  heartPoints.push({
    x: canvas.width / 2 + x * 10,
    y: canvas.height / 2 - y * 10
  });
}

let index = 0;

function drawHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw stars
  for (let i = 0; i < index; i++) {
    const p = heartPoints[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,220,240,0.9)";
    ctx.fill();
  }

  // Draw lines
  if (index > 1) {
    ctx.beginPath();
    ctx.moveTo(heartPoints[0].x, heartPoints[0].y);
    for (let i = 1; i < index; i++) {
      ctx.lineTo(heartPoints[i].x, heartPoints[i].y);
    }
    ctx.strokeStyle = "rgba(255,180,210,0.6)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  if (index < heartPoints.length) {
    index++;
    setTimeout(drawHeart, 120); // dreamy speed
  }
}

// STAR CLICK → PORTAL OPENS → CONSTELLATION STARTS
star.addEventListener("click", () => {
  portal.classList.add("active");

  setTimeout(() => {
    drawHeart();
  }, 800);

  if (navigator.vibrate) navigator.vibrate(60);
});



