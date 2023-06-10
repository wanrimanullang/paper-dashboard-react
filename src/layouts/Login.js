import React from "react";
import { Form, Button } from 'react-bootstrap';
import useAuth from "../hooks/useAuth";

const Login = () => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    handleLogin,
    isLoggedIn,
    handleLogout,
  } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="container mt-5">
      {isLoggedIn ? (
        <div>
          <p>Logged in as: {username}</p>
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      )}
    </div>
  );
};

export default Login;
