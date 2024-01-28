function showLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('newPatientForm').style.display = 'block';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('new-patient-container').style.display = 'none';
  }

  function showNewPatientForm() {
    document.getElementById('newPatientForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('new-patient-container').style.display = 'block';
  }