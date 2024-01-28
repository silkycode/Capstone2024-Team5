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

function dummyLogin() {
  alert("Dummy login - logic to be implemented");
  window.location.href = './src/pages/patient-dashboard.html'
}

function dummySubmitNewPatientForm() {
  alert("Dummy submit new patient form - logic to be implemented" + "\n" + "Assume user is entered");
  window.location.href = 'index.html';
}