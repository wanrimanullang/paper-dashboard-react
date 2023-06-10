import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: username,
        password: password,
      });

      if (response.data.token) {
        setIsLoggedIn(true);
      } else {
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error(error);
      setUsername('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return {
    username,
    password,
    isLoggedIn,
    setUsername,
    setPassword,
    handleLogin,
    handleLogout,
  };
};

export default useAuth;
