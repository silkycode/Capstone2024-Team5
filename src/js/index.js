// showLoginForm() and showNewPatientForm() are used to dynamically display correct form based on button clicks 
function showLoginForm() {
  document.getElementById("login-container").style.display = "block";
  document.getElementById("new-patient-container").style.display = "none";
  document.getElementById("form-buttons").getElementsByTagName("h2")[0].style.display = "none";
}

function showNewPatientForm() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("new-patient-container").style.display = "block";
  document.getElementById("form-buttons").getElementsByTagName("h2")[0].style.display = "none";
}

// To add: correct login authentication protocol 
function dummyLogin() {
  alert("Dummy login - logic to be implemented");
  window.location.href = './src/pages/patient-dashboard.html'
}

function dummySubmitNewPatientForm() {
  alert("Dummy submit new patient form - logic to be implemented" + "\n" + "Assume user is entered");
  window.location.href = 'index.html';
}


// To add: stronger validation for correct username/password format (TBD)
function validateLoginForm() {
  var usernameInput = document.getElementById("login-username");
  var passwordInput = document.getElementById("login-password");

  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");

  usernameError.innerHTML = "";
  passwordError.innerHTML = "";

  if (usernameInput.value.trim() === "") {
    usernameError.innerHTML = "Username is required.";
  }

  if (passwordInput.value.trim() === "") {
    passwordError.innerHTML = "Password is required.";
  }

  if (usernameError.innerHTML === "" && passwordError.innerHTML === "") {
    dummyLogin();
  }
}