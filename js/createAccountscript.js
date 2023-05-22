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

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {
    myForm.submit(); // Submit the form if all inputs are valid
  }
});

// nameInput.addEventListener("blur", function () {
//   validateName();
// });

// emailInput.addEventListener("blur", function () {
//   validateEmail();
// });

// passwordInput.addEventListener("blur", function () {
//   validatePassword();
//   validateConfirmPassword();
// });

// confirmPasswordInput.addEventListener("blur", function () {
//   validateConfirmPassword();
// });

nameInput.addEventListener("input", function () {
    validateName();
  });
  
  emailInput.addEventListener("input", function () {
    validateEmail();
  });
  
  passwordInput.addEventListener("input", function () {
    validatePassword();
    validateConfirmPassword();
  });
  
  confirmPasswordInput.addEventListener("input", function () {
    validateConfirmPassword();
  });

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
  // Custom email validation logic
  // Implement your own email validation logic here
  // This is just a basic example
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function validatePassword() {
    const password = passwordInput.value.trim();
    const helperText = passwordInput.parentElement.querySelector('.helper-text');
    const errorMessage = passwordInput.parentElement.querySelector('.error-message');
  
    if (password.length < 8) {
      helperText.textContent = 'Password must be at least 8 characters long';
      errorMessage.textContent = 'Password is too short';
      errorMessage.style.display = 'block';
      return false;
    } else {
      helperText.textContent = '';
      errorMessage.style.display = 'none';
      return true;
    }
  }
  
  function validateConfirmPassword() {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const helperText = confirmPasswordInput.parentElement.querySelector('.helper-text');
    const errorMessage = confirmPasswordInput.parentElement.querySelector('.error-message');
  
    if (confirmPassword !== password) {
      helperText.textContent = 'Please retype your password correctly';
      errorMessage.textContent = 'Passwords do not match';
      errorMessage.style.display = 'block';
      return false;
    } else {
      helperText.textContent = '';
      errorMessage.style.display = 'none';
      return true;
    }
  }