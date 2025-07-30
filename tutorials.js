// tutorials.js

document.addEventListener("DOMContentLoaded", () => {
  // Toggle accordion
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      header.classList.toggle("active");
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  // Typewriter text loop
  const messages = [
    "Learn Networking like a Pro",
    "Build Fast Websites",
    "Understand Cloud in 5 Minutes",
    "Secure Your Digital World",
    "Automate with Python",
    "Master Git and GitHub"
  ];

  let index = 0;
  const typewriterEl = document.querySelector(".typewriter");

  function updateTypewriter() {
    typewriterEl.textContent = messages[index];
    index = (index + 1) % messages.length;
  }

  setInterval(updateTypewriter, 4000);
  updateTypewriter(); // Initial call

  // Mobile nav toggle
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks").querySelector("ul");
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
