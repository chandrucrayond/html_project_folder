console.log("h3llo createAccountscript.js file is loaded....");

var myForm = document.getElementById("createAccountForm");
var nameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("retype-password");
const loginButton = document.getElementsByClassName("loginAccount--button")[0];

if (loginButton) {
  loginButton.addEventListener("click", () => {
    setTimeout(function () {
      window.location.href = myForm.action;
    }, 1000);
});
}

const visibilityImage = document.getElementsByClassName(
  "input--image__visibility"
);
const toggleVisibledText = document.getElementsByClassName(
  "createAccount--input__password"
);
for (let i = 0; i < visibilityImage.length; i++) {
  visibilityImage[i].addEventListener("click", function () {

    const type = toggleVisibledText[i].getAttribute("type");
    if (type === "password") {
      toggleVisibledText[i].setAttribute("type", "text");
      toggleVisibledText[i].style.fontWeight = 600;
    } else {
      toggleVisibledText[i].setAttribute("type", "password");
      toggleVisibledText[i].style.fontWeight = 800;
    }
  });
}


if (myForm) {
  myForm.addEventListener("click", function (event) {
    event.preventDefault();

    if (
      validateName() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword()
    ) {
      setInputValues();

      setTimeout(function () {
        var successMessage = document.getElementById("successMessage");
        successMessage.classList.add("show");
        setTimeout(function () {
          window.location.href = myForm.action;
        }, 2000);
      }, 1000);
    }
  });
}

function setInputValues() {
  localStorage.setItem("username", nameInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("password", passwordInput.value);
}

if (nameInput) {
  nameInput.addEventListener("blur", function () {
    validateName();
  });
}

if (emailInput) {
  emailInput.addEventListener("blur", function () {
    validateEmail();
  });
}

if (passwordInput) {
  passwordInput.addEventListener("blur", function () {
    validatePassword();
    validateConfirmPassword();
  });
}

if (confirmPasswordInput) {
  confirmPasswordInput.addEventListener("blur", function () {
    validateConfirmPassword();
  });
}

function validateName() {
  const name = nameInput.value.trim();
  const helperText = nameInput.parentElement.querySelector(".helper-text");
  const errorMessage = nameInput.parentElement.querySelector(".error-message");

  if (name === "") {
    helperText.textContent = "Please enter your name";
    errorMessage.textContent = "Name is required";
    errorMessage.style.display = "block";
    return false;
  } else {
    helperText.textContent = "";
    errorMessage.style.display = "none";
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const helperText = emailInput.parentElement.querySelector(".helper-text");
  const errorMessage = emailInput.parentElement.querySelector(".error-message");

  if (email === "") {
    helperText.textContent = "Please enter your email";
    errorMessage.textContent = "Email is required";
    errorMessage.style.display = "block";
    return false;
  } else if (!isValidEmail(email)) {
    helperText.textContent = "";
    errorMessage.textContent = "Please enter a valid email";
    errorMessage.style.display = "block";
    return false;
  } else {
    helperText.textContent = "";
    errorMessage.style.display = "none";
    return true;
  }
}

function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function validatePassword() {
  const password = passwordInput.value.trim();
  const helperText = passwordInput.parentElement.querySelector(".helper-text");
  const errorMessage =
    passwordInput.parentElement.querySelector(".error-message");
  if (password.length < 8) {
    helperText.textContent = "Password must be at least 8 characters long";
    errorMessage.textContent = "Password is too short";
    errorMessage.style.display = "block";
    return false;
  } else {
    helperText.textContent = "";
    errorMessage.style.display = "none";
    return true;
  }
}

function validateConfirmPassword() {
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  const helperText =
    confirmPasswordInput.parentElement.querySelector(".helper-text");
  const errorMessage =
    confirmPasswordInput.parentElement.querySelector(".error-message");

  if (confirmPassword !== password) {
    helperText.textContent = "Please retype your password correctly";
    errorMessage.textContent = "Passwords do not match";
    errorMessage.style.display = "block";
    return false;
  } else {
    helperText.textContent = "";
    errorMessage.style.display = "none";
    return true;
  }
}

