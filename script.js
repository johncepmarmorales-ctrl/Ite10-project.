// script.js

const loginOverlay = document.getElementById('loginOverlay');
const loginForm = document.getElementById('loginForm');
const portfolio = document.getElementById('portfolio');
const logoutBtn = document.getElementById('logout');
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');

// Simulated credentials (replace with real backend auth)
const validUsername = 'user';
const validPassword = 'pass';

// Show login on page load
window.addEventListener('load', () => {
    loginOverlay.classList.add('show');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        loginOverlay.classList.remove('show');
        portfolio.style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
});

logoutBtn.addEventListener('click', () => {
    portfolio.style.display = 'none';
    loginOverlay.classList.add('show');
    loginForm.reset();
});

// Sidebar toggle
toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});



