const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  
  if (email === '' || password === '') {
    errorMsg.textContent = 'Please fill in all fields.';
    return;
  }

  
  errorMsg.textContent = '';

  
  const loginData = { email, password };

  console.log('Login attempted with:', loginData);


  alert(`Login successful for ${email}! (Backend coming soon)`);
});