// Landing page logic
// Shows personalized message if a session user exists and routes buttons accordingly.

const SESSION_KEY = 'miniSocialCurrentUser';

const primaryCta = document.getElementById('primary-cta');
const secondaryCta = document.getElementById('secondary-cta');

function read(key){
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}

// Decide initial text based on session
const sessionUser = read(SESSION_KEY);

primaryCta.addEventListener('click', () => {
  if(sessionUser && sessionUser.name){
    window.location.href = 'main.html';
  } else {
    window.location.href = 'signup.html';
  }
});

secondaryCta.addEventListener('click', () => {
  window.location.href = 'login.html';
});
