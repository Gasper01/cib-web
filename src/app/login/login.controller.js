import Cookies from "js-cookie";
export default async function LoginController(email, password, router) {
  try {
   
    const response = await fetch('http://localhost:400/admin/signIn', {
      method: 'POST',
      cache: 'no-store',
      mode: "cors",
       headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
    
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const token =await response.json();
    Cookies.set('token',token)
    router.replace('/')
  } catch (error) {
    return error.message;
  }
 }
  


