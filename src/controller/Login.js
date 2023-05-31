import Cookies from 'js-cookie';
import Getlogin from '../lib/Login';
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
      const response = await Getlogin(email, password);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const token = await response.json();
      Cookies.set('token', token, { sameSite: 'none', secure: true });
      router.push('/admin');
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
