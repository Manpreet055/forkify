// Mini Social Media App - Feed Page Only
// This file assumes the user is already logged in via login.html.

// ------------------
// DOM references
// ------------------
const welcomeText = document.getElementById('welcome-text');
const logoutBtn = document.getElementById('logout-btn');
const themeToggleBtn = document.getElementById('theme-toggle');

const searchInput = document.getElementById('search-input');
const sortControls = document.getElementById('sort-controls');

const postForm = document.getElementById('post-form');
const postTextInput = document.getElementById('post-text');
const postImageInput = document.getElementById('post-image-url');
// Wrapper that holds quick emoji buttons
const emojiPicker = document.getElementById('emoji-picker');

const postsContainer = document.getElementById('posts-container');
const emptyState = document.getElementById('empty-state');

// ------------------
// State
// ------------------
let currentUser = null; // { name, email }
let posts = [];
let activeSort = 'latest';

const STORAGE_KEYS = {
  credentials: 'miniSocialUser', // stored by signup page (includes password)
  sessionUser: 'miniSocialCurrentUser', // set by login page
  posts: 'miniSocialPosts',
  theme: 'miniSocialTheme',
};

// ------------------
// LocalStorage helpers
// ------------------
function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // ignore storage errors in this simple demo
  }
}

function readFromStorage(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleString();
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// Return how many users liked a post
function getLikeCount(post) {
  if (!post || !Array.isArray(post.likers)) return 0;
  return post.likers.length;
}

// Whether currentUser liked this post
function currentUserLiked(post) {
  if (!currentUser || !post || !Array.isArray(post.likers)) return false;
  return post.likers.includes(currentUser.email);
}

// ------------------
// UI helpers
// ------------------
function updateWelcome() {
  if (currentUser) {
    welcomeText.textContent = `Welcome, ${currentUser.name}`;
  }
}

// ------------------
// Sorting & filtering
// ------------------
function sortPosts(list, sortKey) {
  const copy = [...list];
  switch (sortKey) {
    case 'oldest':
      copy.sort((a, b) => a.createdAt - b.createdAt);
      break;
    case 'liked':
      copy.sort((a, b) => {
        const likesA = getLikeCount(a);
        const likesB = getLikeCount(b);

        if (likesB === likesA) {
          return b.createdAt - a.createdAt; // latest first if equal likes
        }
        return likesB - likesA;
      });
      break;

    case 'latest':
    default:
      copy.sort((a, b) => b.createdAt - a.createdAt);
  }
  return copy;
}

function applySortActiveState() {
  const buttons = sortControls.querySelectorAll('button[data-sort]');
  buttons.forEach((btn) => {
    if (btn.dataset.sort === activeSort) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ------------------
// Rendering
// ------------------
function renderPosts() {
  const query = searchInput.value.trim().toLowerCase();

  let filtered = posts;
  if (query) {
    filtered = posts.filter((p) => p.text.toLowerCase().includes(query));
  }

  const sorted = sortPosts(filtered, activeSort);

  postsContainer.innerHTML = '';

  if (sorted.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  sorted.forEach((post) => {
    const likeCount = getLikeCount(post);
    const article = document.createElement('article');
    article.className = 'post';
    article.dataset.id = post.id;

    const header = document.createElement('div');
    header.className = 'post-header';

    const authorEl = document.createElement('div');
    authorEl.className = 'post-author';
    authorEl.textContent = post.authorName;

    const metaEl = document.createElement('div');
    metaEl.className = 'post-meta';
    metaEl.textContent = formatDate(post.createdAt);

    header.appendChild(authorEl);
    header.appendChild(metaEl);

    const textEl = document.createElement('p');
    textEl.className = 'post-text';
    textEl.textContent = post.text;

    article.appendChild(header);

    if (post.imageUrl) {
      const img = document.createElement('img');
      img.className = 'post-image';
      img.src = post.imageUrl;
      img.alt = 'Post image';
      article.appendChild(img);
    }

    article.appendChild(textEl);

    const actions = document.createElement('div');
    actions.className = 'post-actions';

    const left = document.createElement('div');
    left.className = 'post-actions-left';

    const likeBtn = document.createElement('button');
    likeBtn.type = 'button';
    likeBtn.className = 'like-btn';
    if (currentUserLiked(post)) likeBtn.classList.add('liked');
    likeBtn.dataset.action = 'like';

    const heartSpan = document.createElement('span');
    heartSpan.className = 'heart';
    heartSpan.textContent = '❤';

    const countSpan = document.createElement('span');
    countSpan.className = 'like-count';
    countSpan.textContent = `${likeCount} like${likeCount === 1 ? '' : 's'}`;

    likeBtn.appendChild(heartSpan);
    likeBtn.appendChild(countSpan);

    left.appendChild(likeBtn);

    const right = document.createElement('div');

    // Only show edit/delete for the author of the post
    const isOwner = currentUser && post.authorEmail && currentUser.email === post.authorEmail;

    if (isOwner) {
      const editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Edit';
      editBtn.dataset.action = 'edit';

      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Delete';
      deleteBtn.dataset.action = 'delete';

      right.appendChild(editBtn);
      right.appendChild(deleteBtn);
    }

    actions.appendChild(left);
    actions.appendChild(right);

    article.appendChild(actions);

    postsContainer.appendChild(article);
  });
}

// ------------------
// Post operations
// ------------------
function addPost(text, imageUrl) {
  const post = {
    id: generateId(),
    authorName: currentUser ? currentUser.name : 'Guest',
    authorEmail: currentUser ? currentUser.email : null,
    text: text.trim(),
    imageUrl: imageUrl.trim() || '',
    createdAt: Date.now(),
    // store list of user emails who liked this post
    likers: [],
  };

  posts.push(post);
  saveToStorage(STORAGE_KEYS.posts, posts);
  renderPosts();
}

function toggleLike(postId) {
  const post = posts.find((p) => p.id === postId);
  if (!post || !currentUser) return;

  if (!Array.isArray(post.likers)) {
    post.likers = [];
  }

  const idx = post.likers.indexOf(currentUser.email);
  if (idx === -1) {
    post.likers.push(currentUser.email);
  } else {
    post.likers.splice(idx, 1);
  }

  saveToStorage(STORAGE_KEYS.posts, posts);
  renderPosts();
}

function deletePost(postId) {
  const confirmation = confirm('Delete this post?');
  if (!confirmation) return;

  posts = posts.filter((p) => p.id !== postId);
  saveToStorage(STORAGE_KEYS.posts, posts);
  renderPosts();
}

function enterEditMode(articleEl, post) {
  if (!articleEl || !post) return;
  if (articleEl.classList.contains('editing')) return;

  articleEl.classList.add('editing');

  const existingTextEl = articleEl.querySelector('.post-text');

  const form = document.createElement('form');
  form.className = 'edit-form';

  const textarea = document.createElement('textarea');
  textarea.rows = 3;
  textarea.value = post.text;
  textarea.placeholder = "Edit your post...";

  const imageInput = document.createElement('input');
  imageInput.type = 'url';
  imageInput.value = post.imageUrl || '';
  imageInput.placeholder = "Image URL (optional)";

  form.appendChild(textarea);
  form.appendChild(imageInput);

  const actions = document.createElement('div');
  actions.className = 'edit-form-actions';

  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.className = 'btn outline';

  const saveBtn = document.createElement('button');
  saveBtn.type = 'submit';
  saveBtn.textContent = 'Save';
  saveBtn.className = 'btn primary';

  actions.appendChild(cancelBtn);
  actions.appendChild(saveBtn);
  form.appendChild(actions);

  existingTextEl.after(form);

  cancelBtn.addEventListener('click', () => {
    form.remove();
    articleEl.classList.remove('editing');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newText = textarea.value.trim();
    const newImage = imageInput.value.trim();

    if (!newText) {
      textarea.style.borderColor = 'var(--danger)';
      setTimeout(() => textarea.style.borderColor = '', 1500);
      return;
    }

    post.text = newText;
    post.imageUrl = newImage;

    saveToStorage(STORAGE_KEYS.posts, posts);
    renderPosts();
  });
}

// ------------------
// Event listeners
// ------------------
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    // Clear only session user so credentials remain for next login
    localStorage.removeItem(STORAGE_KEYS.sessionUser);
    window.location.href = 'login.html';
  });
}

// Append emoji to the end of the post textarea
if (emojiPicker && postTextInput) {
  emojiPicker.addEventListener('click', (e) => {
    const btn = e.target.closest('.emoji-btn');
    if (!btn) return;
    const emoji = btn.textContent;
    const start = postTextInput.selectionStart || postTextInput.value.length;
    const end = postTextInput.selectionEnd || postTextInput.value.length;
    const value = postTextInput.value;
    postTextInput.value = value.slice(0, start) + emoji + value.slice(end);
    postTextInput.focus();
    // Move cursor just after inserted emoji
    const newCursor = start + emoji.length;
    postTextInput.setSelectionRange(newCursor, newCursor);
  });
}

if (postForm) {
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = postTextInput.value.trim();
    const imageUrl = postImageInput.value.trim();

    if (!text) {
      // Simple shake animation or border color change for feedback
      postTextInput.style.borderColor = 'var(--danger)';
      setTimeout(() => {
        postTextInput.style.borderColor = '';
      }, 1500);
      postTextInput.focus();
      return;
    }

    addPost(text, imageUrl);

    postTextInput.value = '';
    postImageInput.value = '';
  });
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    renderPosts();
  });
}

if (sortControls) {
  sortControls.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-sort]');
    if (!btn) return;

    activeSort = btn.dataset.sort;
    applySortActiveState();
    renderPosts();
  });
}

if (postsContainer) {
  postsContainer.addEventListener('click', (e) => {
    const actionBtn = e.target.closest('button[data-action]');
    if (!actionBtn) return;

    const article = actionBtn.closest('.post');
    if (!article) return;

    const postId = article.dataset.id;
    const action = actionBtn.dataset.action;

    const post = posts.find((p) => p.id === postId);

    if (!post) return;

    if (action === 'like') {
      // Anyone can like
      toggleLike(postId);
    } else {
      // Guard edit/delete so only the author can perform them
      const isOwner = currentUser && post.authorEmail && currentUser.email === post.authorEmail;
      if (!isOwner) {
        console.warn('Unauthorized action');
        return;
      }

      if (action === 'delete') {
        deletePost(postId);
      } else if (action === 'edit') {
        enterEditMode(article, post);
      }
    }
  });
}

// ------------------
// Theme toggle
// ------------------
function applyStoredTheme() {
  const theme = readFromStorage(STORAGE_KEYS.theme, 'light');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    saveToStorage(STORAGE_KEYS.theme, isDark ? 'dark' : 'light');
  });
}

// ------------------
// Init
// ------------------
function init() {
  // Apply saved theme first for smooth experience
  applyStoredTheme();

  // Load saved posts (if any)
  const storedPosts = readFromStorage(STORAGE_KEYS.posts, []);
  if (Array.isArray(storedPosts)) {
    posts = storedPosts.map((p) => {
      const createdAt =
        typeof p.createdAt === 'number'
          ? p.createdAt
          : Date.parse(p.createdAt) || Date.now();

      // migrate old numeric-like posts to new likers-based structure
      let likers = Array.isArray(p.likers) ? p.likers : [];
      return { ...p, createdAt, likers };
    });
  }

  // Require a logged-in session user; if missing, go back to login page
  const sessionUser = readFromStorage(STORAGE_KEYS.sessionUser);
  if (!sessionUser || !sessionUser.name || !sessionUser.email) {
    window.location.href = 'login.html';
    return;
  }

  currentUser = { name: sessionUser.name, email: sessionUser.email };
  updateWelcome();

  applySortActiveState();
  renderPosts();
}

window.addEventListener('DOMContentLoaded', init);
