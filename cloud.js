// cloud.js
function checkAnswer(choice) {
  const result = document.getElementById("quiz-result");
  if (choice === 'C') {
    result.textContent = "Correct! PaaS provides a platform for developers.";
    result.style.color = "green";
  } else {
    result.textContent = "Incorrect. Try again.";
    result.style.color = "red";
  }
}

// Future extension: animations, fetch real-time cloud data, etc.
