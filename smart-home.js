// smart-home.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletter-form');
  const message = document.querySelector('.message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!email || !validateEmail(email)) {
      message.textContent = "Please enter a valid email.";
      message.style.color = "red";
    } else {
      message.textContent = "Thank you for subscribing!";
      message.style.color = "green";
      form.reset();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
