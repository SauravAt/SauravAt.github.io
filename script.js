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

const portalTunnel = document.getElementById("portal-tunnel");
const hero = document.querySelector(".tunnel-hero");
const text = document.querySelector(".tunnel-text");
const starsContainer = document.getElementById("tunnel-stars");
const music = document.getElementById("portal-music");

let portalTriggered = false;

// Floating particle templates (stars, hearts, mini inside-jokes)
const particleEmojis = ["💗","🌸","✨","💌","😊","🌙"]; // can add inside-joke words
function spawnParticle() {
  const particle = document.createElement("div");
  particle.className = "portal-particle";
  particle.innerText = particleEmojis[Math.floor(Math.random()*particleEmojis.length)];

  // Random 3D positions
  const x = (Math.random()*200 - 100) + "px";
  const y = (-Math.random()*300) + "px";
  const z = (-Math.random()*300) + "px";
  particle.style.left = "50%";
  particle.style.top = "50%";
  particle.style.transform = `translate3d(${x},${y},${z})`;
  
  // Random animation
  const duration = 5 + Math.random()*5;
  particle.animate([
    { transform: `translate3d(${x},${y},${z})`, opacity: 0.4 },
    { transform: `translate3d(${x},${parseInt(y)+600}px,${parseInt(z)+100}px)`, opacity: 0 }
  ], { duration: duration*1000, easing: "ease-out" });

  starsContainer.appendChild(particle);
  setTimeout(()=> particle.remove(), duration*1000);
}

// Spawn particles continuously
setInterval(()=> { if(portalTriggered) spawnParticle(); }, 200);

// Trigger portal tunnel on scroll near the end
window.addEventListener("scroll", () => {
  if(portalTriggered) return;

  const progress = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
  
  if(progress > 0.93){
    portalTriggered = true;
    portalTunnel.classList.add("active");
    music.play();

    // Hero image zoom & text reveal handled below
  }

  // Zoom hero image as she scrolls deeper
  if(portalTriggered){
    let scale = 0.8 + (progress-0.93)*5;
    if(scale>1.2) scale = 1.2;
    hero.style.transform = `translate(-50%, -50%) scale(${scale})`;

    // Reveal confession text after hero scales
    if(scale > 1.05) text.style.opacity = 1;
  }
});

// Tap for heart explosion
document.addEventListener("click", (e)=>{
  if(!portalTriggered) return;

  for(let i=0;i<12;i++){
    const p = document.createElement("div");
    p.className="portal-particle";
    p.innerText = particleEmojis[Math.floor(Math.random()*particleEmojis.length)];
    p.style.left=e.clientX+"px";
    p.style.top=e.clientY+"px";
    p.style.transform=`translate3d(0,0,0)`;
    const dur = 1000 + Math.random()*1000;
    const x = (Math.random()*120-60);
    const y = (Math.random()*-120);
    const z = (Math.random()*80-40);
    p.animate([
      { transform:`translate3d(0,0,0)`, opacity:1 },
      { transform:`translate3d(${x}px,${y}px,${z}px)`, opacity:0 }
    ],{duration:dur, easing:"ease-out"});
    starsContainer.appendChild(p);
    setTimeout(()=>p.remove(),dur);
  }
});


