const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const submitButton = document.querySelector("#submitButton");

function onChange() {
  if (password.value === confirmPassword.value) {
    let borderStyle = "1px solid green";
    password.style.border = borderStyle;
    confirmPassword.style.border = borderStyle;
    submitButton.disabled = false;
  } else {
    let borderStyle = "1px solid red";
    password.style.border = borderStyle;
    confirmPassword.style.border = borderStyle;
    submitButton.disabled = true;
  }
}
