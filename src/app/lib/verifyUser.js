
export default async function verifyUser(token) {
  const response = await fetch('http://localhost:400/user/verifyuser', {
    cache: 'no-store',
    headers: { 'x-access-token': token },
  });
  const data = await response.json();
  return data;
}
