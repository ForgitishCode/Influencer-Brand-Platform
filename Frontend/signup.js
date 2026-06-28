function selectRole(role) {
  document.getElementById('role-input').value = role;
  document.getElementById('btn-brand').classList.remove('active');
  document.getElementById('btn-influencer').classList.remove('active');
  document.getElementById('btn-' + role).classList.add('active');
}

const form = document.getElementById('signup-form');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const role = document.getElementById('role-input').value;

  const errorMsg = document.getElementById('error-msg');

  if (fullname === '') {
    errorMsg.textContent = 'Please enter your full name.';
    return;
  }

  if (password !== confirmPassword) {
    errorMsg.textContent = 'Passwords do not match.';
    return;
  }

  errorMsg.textContent = '';

  const userData = { fullname, email, password, role };

  console.log('Form is valid. Ready to send:', userData);
  alert(`Account created for ${fullname} as a ${role}! (Backend coming soon)`);
});