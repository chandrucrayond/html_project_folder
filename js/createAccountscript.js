const visibilityImage = document.getElementsByClassName(
  "input--image__visibility"
);
const toggleVisibledText = document.getElementsByClassName(
  "createAccount--input__password"
);
for (let i = 0; i < visibilityImage.length; i++) {
  visibilityImage[i].addEventListener("click", function () {
    console.log("visibility clicked");
    const type = toggleVisibledText[i].getAttribute("type");
    if (type === "password") {
      toggleVisibledText[i].setAttribute("type", "text");
      toggleVisibledText[i].style.fontWeight = 600;
      // togglePasswordVisibility.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
    } else {
      toggleVisibledText[i].setAttribute("type", "password");
      toggleVisibledText[i].style.fontWeight = 800;
      // togglePasswordVisibility.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
    }
  });
}

const myForm = document.getElementById("createAccountForm");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("retype-password");

if (myForm) {
  myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      validateName() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword()
    ) {
      console.log(nameInput.value);
      console.log(emailInput.value);
      console.log(passwordInput.value);
      console.log(confirmPasswordInput.value);
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

export function getNameInputValue() {
  const element = document.getElementById("username");
  if (element) {
    const value = element.value;
    if (value !== null) return value;
  }
}

export function getEmailInputValue() {
  const element = document.getElementById("email");
  if (element) {
    const value = element.value;
    if (value !== null) return value;
  }
}

export function getPasswordInputValue() {
  const element = document.getElementById("password");
  if (element) {
    const value = element.value;
    if (value !== null) return value;
  }
}

export function getConfirmPasswordInputValue() {
  const element = document.getElementById("retype-password");
  if (element) {
    const value = element.value;
    if (value !== null) return value;
  }
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
