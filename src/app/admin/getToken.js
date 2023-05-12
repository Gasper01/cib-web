export default function getToken() {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
  } catch (error) {}
}
