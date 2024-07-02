const loginButton = document.getElementById("loginButton");
const emailInput = document.getElementById("user-email");

loginButton.addEventListener('click', function() {
  emailInput.focus();
})