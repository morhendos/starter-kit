export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3001/' : 'https://enigmatic-tor-93609.herokuapp.com/';
}
