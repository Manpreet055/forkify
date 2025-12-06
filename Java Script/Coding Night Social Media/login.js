// Handles login flow for Mini Social App
// Compares credentials from localStorage and, on success, opens main feed page.

const loginForm = document.getElementById('login-form');

// All registered users are stored as an array under this key.
const USERS_KEY = 'miniSocialUser';
// The currently logged-in user (simple session) is stored separately.
const SESSION_KEY = 'miniSocialCurrentUser';

function read(key){
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function save(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

function redirectIfAlreadyLoggedIn(){
  const sessionUser = read(SESSION_KEY);
  if(sessionUser && sessionUser.email){
    window.location.href = 'index.html';
  }
}

if(loginForm){
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    const stored = read(USERS_KEY);
    const users = Array.isArray(stored) ? stored : [];
    const matched = users.find(u => u.email === email && u.password === password);

    if(!matched){
      alert('Invalid credentials or user not found. Please sign up first.');
      return;
    }

    const sessionUser = { name: matched.name, email: matched.email };
    save(SESSION_KEY, sessionUser);

    window.location.href = 'main.html';
  });
}

// If already logged in, skip login.
redirectIfAlreadyLoggedIn();
