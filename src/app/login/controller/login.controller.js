export default async function LoginController(email, password, router) {
  try {
    const response = await fetch('https://full-api.vercel.app/admin/signIn', {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'http://localhost:3000',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Invalid email or password');
    }

    const { token } = await response.json();

    // Aquí podrías guardar el token en el almacenamiento local o en una cookie
    localStorage.setItem('token', token);
    router.push('/home');
  } catch (error) {
    return error.message;
  }
}
