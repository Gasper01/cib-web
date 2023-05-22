import Cookies from 'js-cookie';
export default async function LoginController(email, password, router) {
  try {
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

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const token = await response.json();
    Cookies.set('token', token, { sameSite: 'none', secure: true });
    router.replace('/admin');
  } catch (error) {
    return error.message;
  }
}
