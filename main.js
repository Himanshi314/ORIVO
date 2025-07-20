document.addEventListener("DOMContentLoaded", function () {
  const fadeEl = document.getElementById('apply-section');

  function onScroll() {
    const rect = fadeEl.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
      fadeEl.classList.add('is-visible');
      // Optionally remove the event listener if you only want this to happen once
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Trigger on page load in case already visible
});
// Example for sign up
document.getElementById('signupForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  const response = await fetch('http://localhost:4000/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  const data = await response.json();
  if (response.ok) {
    alert('Signup successful! Please log in.');
    // Optionally switch to login view, auto-login, etc.
  } else {
    alert(data.error);
  }
});

// Example for login
document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

  const response = await fetch('http://localhost:4000/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('jwt', data.token);
    alert('Logged in!');
    // Update UI to show profile/courses, etc.
  } else {
    alert(data.error);
  }
});
