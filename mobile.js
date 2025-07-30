// mobile.js
document.addEventListener('DOMContentLoaded', () => {
  const pollForm = document.getElementById('featurePoll');
  const pollMessage = document.querySelector('.poll-message');

  pollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selected = pollForm.querySelector('input[name="feature"]:checked');
    if (!selected) {
      pollMessage.textContent = "Please select a feature before voting.";
      pollMessage.style.color = "red";
    } else {
      pollMessage.textContent = `Thanks for voting for: ${selected.value}`;
      pollMessage.style.color = "green";
    }
  });

  const newsletter = document.getElementById('mobileNewsletter');
  const newsletterMsg = document.querySelector('.newsletter-message');

  newsletter.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletter.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      newsletterMsg.textContent = "Please enter a valid email.";
      newsletterMsg.style.color = "red";
    } else {
      newsletterMsg.textContent = "Subscription successful!";
      newsletterMsg.style.color = "green";
      newsletter.reset();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
