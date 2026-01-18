// login.js - Authentication for single user Rose888/Mine888

// Hardcoded single user data (matches your specifications)
const validUser = {
  id: "rose_user_001",
  username: "Rose2317",            // Login username
  displayName: "Rose2317",        // Display name shown in the app
  password: "mine##23177pass",            // Login password
  balance: 2660222.00,            // Starting balance as shown in your screenshots
  deposit: 184497.5,
  vip_level: "VIP4",              // VIP level as shown in your screenshots
  created_at: "2026-01-14 04:18:54.476489+00"
};

// REMOVED AUTO-LOGIN - Only check existing session

// Function to check if user is already logged in
function checkExistingSession() {
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      if (user.username === validUser.username) {
        // User is already logged in
        return user;
      }
    } catch (e) {
      // Invalid stored data, clear it
      localStorage.removeItem('currentUser');
    }
  }
  return null;
}

// Function to handle login
function handleLogin(username, password) {
  // Check credentials against the single valid user
  if (username === validUser.username && password === validUser.password) {
    // Save user to localStorage (excluding password for security)
    const userToStore = {
      ...validUser
    };
    delete userToStore.password; // Don't store password in localStorage
    
    localStorage.setItem('currentUser', JSON.stringify(userToStore));
    return true;
  }
  
  return false;
}

// Function to handle logout
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

// Export functions for use in other files
window.handleLogin = handleLogin;
window.logout = logout;
window.checkExistingSession = checkExistingSession;

// IMPORTANT: NO AUTO-REDIRECT on page load - user must login manually
