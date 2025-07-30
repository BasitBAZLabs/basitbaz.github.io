// blockchain.js
// Animate sections on scroll
const sections = document.querySelectorAll(".blockchain-main section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-section");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach((section) => {
  observer.observe(section);
});
