// gaming.js

function checkGameAnswer(choice) {
  const feedback = document.getElementById("quiz-feedback");
  if (choice === "B") {
    feedback.textContent = "Correct! Valve developed Half-Life.";
    feedback.style.color = "#00ffae";
  } else {
    feedback.textContent = "Oops! Try again.";
    feedback.style.color = "#ff4081";
  }
}

function submitComment() {
  const textarea = document.querySelector("textarea");
  const comment = textarea.value.trim();
  if (comment) {
    const commentBox = document.getElementById("user-comments");
    const p = document.createElement("p");
    p.textContent = comment;
    commentBox.appendChild(p);
    textarea.value = "";
  } else {
    alert("Please write something before submitting.");
  }
} 

// Optional: Animate genre cards on scroll
window.addEventListener("scroll", () => {
  const genres = document.querySelectorAll(".genre-list article");
  genres.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.transition = "transform 0.5s, opacity 0.5s";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
