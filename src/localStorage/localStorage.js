
localStorage.setItem('auth', 'Bearer your-auth-value');
localStorage.setItem('username', 'john_doe');


const auth = localStorage.getItem('auth');
const username = localStorage.getItem('username');


localStorage.removeItem('auth');
localStorage.removeItem('username');


localStorage.clear();
