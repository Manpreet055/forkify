// Handles signup flow for Mini Social App
// Stores basic credentials then redirects user to login page.

const signupForm = document.getElementById('signup-form');

// All registered users are stored as an array under this key.
const USERS_KEY = 'miniSocialUser';
// The currently logged-in user (simple session) is stored separately.
const SESSION_KEY = 'miniSocialCurrentUser';

function save(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

function read(key){
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function redirectIfAlreadyLoggedIn(){
  const sessionUser = read(SESSION_KEY);
  if(sessionUser && sessionUser.email){
    window.location.href = 'index.html';
  }
}

if(signupForm){
  signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if(!name || !email || !password){
      alert('Please fill in all fields');
      return;
    }

    const user = { name, email, password };

    // Load existing users array (or start a new one)
    const existing = read(USERS_KEY);
    let users = Array.isArray(existing) ? existing : [];

    // If user with same email exists, replace their record; otherwise push new
    const index = users.findIndex(u => u.email === email);
    if (index !== -1) {
      users[index] = user;
    } else {
      users.push(user);
    }

    save(USERS_KEY, users);

    alert('Signup successful! Please log in.');
    window.location.href = 'login.html';
  });
}

// If already logged in, skip signup.
redirectIfAlreadyLoggedIn();
