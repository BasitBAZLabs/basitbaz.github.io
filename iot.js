// iot.js
// Add simple fade-in animation when scrolling into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

document.querySelectorAll(".iot-section, .intro, .future, .iot-challenges").forEach((section) => {
  observer.observe(section);
});
