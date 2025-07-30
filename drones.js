// drones.js
document.addEventListener("DOMContentLoaded", () => {
  // Scroll sync highlighting
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Tab toggles
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      tabContents.forEach(tc => tc.style.display = "none");
      tabContents[index].style.display = "block";
    });
  });

  // Form validation
  const quizForm = document.getElementById("quizForm");
  quizForm?.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("quizName").value;
    const result = document.getElementById("quizResult");
    if (!name) {
      result.textContent = "Please enter your name to start the quiz.";
      result.style.color = "red";
    } else {
      result.textContent = `Thanks for participating, ${name}! Check your results soon.`;
      result.style.color = "#00ffe7";
    }
  });

  // Theme toggle
  const toggle = document.getElementById("themeToggle");
  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
  });
});
