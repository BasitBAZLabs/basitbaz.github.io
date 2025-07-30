// contact.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.querySelector('.form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const topic = document.getElementById('topic').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill out all fields.';
      status.style.color = 'red';
      return;
    }

    if (!validateEmail(email)) {
      status.textContent = 'Invalid email address.';
      status.style.color = 'red';
      return;
    }

    status.textContent = `Thank you, ${name}! We'll respond regarding "${topic}" soon.`;
    status.style.color = 'green';
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
