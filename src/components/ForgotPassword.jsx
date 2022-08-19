import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/useAuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const {forgotPassword}=useUserAuth();
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
        await forgotPassword(email);
        alert("Password Reset Link send to your mail...")
        navigate("/login")
    } catch (error) {
        setError(error.message);
        
    }


  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3 text-center">Forgot Password</h2>

        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="✉ Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Reset Password
            </Button>
          </div>
        </Form>

        <div className="p-2 box mt-4 text-center">
          Go to Singin Page<Link to="/login">Sign In</Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
