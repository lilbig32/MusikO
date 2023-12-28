const emailInput = document.getElementById("emailInput");
const attachButton = document.getElementById("attachButton");
const emailError = document.getElementById("emailError");

attachButton.addEventListener("click", function() {
  const emailValue = emailInput.value;
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Неправильный формат электронной почты";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});