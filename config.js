// config.js - Updated for single user authentication

export function checkAuth() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    
    // Don't redirect if we're on the login page
    if (window.location.pathname.includes('index.html') || 
        window.location.pathname === '/' || 
        window.location.pathname.endsWith('/')) {
        return user; // Return user if exists, but don't redirect
    }
    
    // For all other pages, check if user is logged in
    if (!user) {
        window.location.href = 'index.html';
        return null;
    }
    return user;
}

export function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

window.logout = logout;

// Optional: Add a global auth check for all pages except index.html
if (!window.location.pathname.includes('index.html') && 
    !window.location.pathname.endsWith('/') && 
    window.location.pathname !== '/') {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        window.location.href = 'index.html';
    }
}
