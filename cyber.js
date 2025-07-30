// cybersecurity.js

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navList = document.getElementById("navLinks").querySelector("ul");

  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("show");
  });

  // Fade in articles on scroll
  const articles = document.querySelectorAll(".articles article");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  articles.forEach(article => {
    article.style.opacity = 0;
    article.style.transform = "translateY(20px)";
    observer.observe(article);
  });
});
