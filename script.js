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
