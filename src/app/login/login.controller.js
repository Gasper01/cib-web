export default async function LoginController(email, password, router) {
  try {
    const response = await fetch('https://full-api.vercel.app/admin/signIn', {
      method: 'POST',
      cache: 'no-store',
       mode: "cors",
       headers: {
        Origin: 'https://cib-web.vercel.app',
        'Content-Type': 'application/json',
      
      },
      credentials: "include",
    
      body: JSON.stringify({ email, password }),
    });
   
   
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
     //const { token } = await response.json();
       // la cookie se ha creado, puedes redirigir al usuario
      router.push('/');
   
    // guardar el token en el almacenamiento local
  //  localStorage.setItem('token', token);
   
  } catch (error) {
    return error.message;
  }
}
