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
const images = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg"
];

function popImageCluster() {
  const count = Math.floor(Math.random() * 2) + 3; // 3 or 4 images

  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.className = "popup-img";

    img.style.left = `${30 + Math.random() * 40}%`;
    img.style.top = `${45 + Math.random() * 10}%`;
    img.style.animationDelay = `${i * 0.3}s`;

    document.body.appendChild(img);
    setTimeout(() => img.remove(), 6000);
  }
}

// every 4 seconds
setInterval(popImageCluster, 4000););

let finalTriggered = false;

window.addEventListener("scroll", () => {
  if (finalTriggered) return;

  const progress =
    (window.scrollY + window.innerHeight) /
    document.documentElement.scrollHeight;

  if (progress > 0.93) {
    finalTriggered = true;
    document.getElementById("final-lock")
      .classList.add("active");
  }
});

document.getElementById("final-btn")
  .addEventListener("click", () => {
    document.querySelector(".final-text.delay")
      .innerText = "Happy Valentine’s Day 🤍";
  });
function createPetal() {
  const petal = document.createElement("div");
  petal.innerText = "🌸";
  petal.style.position = "fixed";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.top = "-20px";
  petal.style.opacity = "0.4";
  petal.style.fontSize = "14px";
  petal.style.pointerEvents = "none";
  petal.style.animation = "petalFall 10s linear forwards";
  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}

/* Rare & gentle */
setInterval(createPetal, 15000);


document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.innerText = "💗";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.fontSize = "14px";
  heart.style.opacity = "0.7";
  heart.style.pointerEvents = "none";
  heart.style.animation = "tapHeart 2.5s ease-out forwards";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2500);
});

