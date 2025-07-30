// news.js

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navList = document.getElementById("navLinks").querySelector("ul");

  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("show");
  });

  // Optional: Highlight today's top news (e.g., first article)
  const topArticle = document.querySelector(".news-item");
  if (topArticle) {
    topArticle.style.borderColor = "#ffcc00";
    topArticle.style.boxShadow = "0 0 10px rgba(255,204,0,0.3)";
  }
});
