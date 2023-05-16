
export default async function VerifyUser(token) {
  
  const response = await fetch('https://full-api.vercel.app/user/verifyuser', {
    cache: 'no-store',
    headers: {
      Origin:'https://cib-web.vercel.app',
       'x-access-token': token },
  });
  const data = await response.json();
  return data;
}
