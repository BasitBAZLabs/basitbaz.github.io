// ar-vr.js
function checkQuizAnswer(answer) {
  const result = document.getElementById("quiz-result");
  if (answer === "B") {
    result.textContent = "Correct! Oculus launched the Oculus Rift in 2012.";
    result.style.color = "#00ff99";
  } else {
    result.textContent = "Oops! That's incorrect. Try again.";
    result.style.color = "#ff6666";
  }
}

function submitComment() {
  const commentBox = document.getElementById("comment-box");
  const comment = commentBox.value.trim();
  if (comment !== "") {
    const display = document.getElementById("comments-display");
    const newComment = document.createElement("p");
    newComment.textContent = comment;
    display.appendChild(newComment);
    commentBox.value = "";
  }
}
