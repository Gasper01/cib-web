export default async function GetLogin(email, password) {
  const response = await fetch('https://full-api.vercel.app/admin/signIn', {
    method: 'POST',
    cache: 'no-store',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',

    body: JSON.stringify({ email, password }),
  });
  return response;
}
