function getToken() {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
  } catch (error) {}
}
const token = getToken();

export default async function verifyUser() {
  const response = await fetch('http://localhost:400/user/verifyuser', {
    cache: 'no-store',
    headers: { 'x-access-token': token },
  });
  const data = await response.json();
  return data;
}
