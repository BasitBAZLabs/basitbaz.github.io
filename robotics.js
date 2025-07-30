// robotics.js

document.addEventListener("DOMContentLoaded", () => {
  // Scroll animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
  });

  // Dark/Light mode toggle
  const themeBtn = document.getElementById("themeToggle");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // FAQ toggle
  const faqs = document.querySelectorAll(".faq-question");
  faqs.forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });

  // Newsletter form validation
  const form = document.getElementById("newsletterForm");
  const email = document.getElementById("emailInput");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const emailValue = email.value.trim();
    if (!emailValue || !emailValue.includes("@") || !emailValue.includes(".")) {
      feedback.textContent = "Please enter a valid email address.";
    } else {
      feedback.textContent = "Thank you for subscribing!";
      email.value = "";
    }
  });
});