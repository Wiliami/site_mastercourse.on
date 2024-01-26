import { Logout } from '../../../src/classes/Logout.js';

function logout() {
  const logoutSession = new Logout();
  logoutSession.logout();
};

console.log(logout());