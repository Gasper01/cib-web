import Cookies from 'js-cookie';
import getlogin from '../lib/login';
import { useState } from 'react';

export default function LoginController(router) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await getlogin(email, password);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const token = await response.json();
      Cookies.set('token', token, { sameSite: 'none', secure: true });
      router.replace('/admin');
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    isLoading,
    handleSubmit,
  };
}
