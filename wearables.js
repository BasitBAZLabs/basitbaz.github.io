document.addEventListener('DOMContentLoaded', () => {
  const feedback = document.getElementById('feedback');
  const charCount = document.getElementById('char-count');
  const form = document.getElementById('wearable-quiz');

  feedback.addEventListener('input', () => {
    const len = feedback.value.length;
    charCount.textContent = `${len}/300`;
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const radios = form.querySelectorAll('input[type="radio"]:checked');
    if (radios.length < 2 || feedback.value.trim() === '') {
      alert('Please answer all questions and provide feedback.');
      return;
    }
    alert('Thanks for your response!');
    form.reset();
    charCount.textContent = '0/300';
  });
});
