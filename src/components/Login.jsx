
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/useAuthContext";


const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const {login}=useUserAuth();
    const navigate=useNavigate();

    const handleSubmit= async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email,password);
            alert("Login Sucessfull")
            navigate("/");
        } catch (error) {
            setError(error.message);
            
        }
    };

    return (
        <>
             <div className="p-4 box">
        <h2 className="mb-3 text-center">Welcome Back</h2>
        <p className="text-center .bg-success text-success">Sign in to Continue</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="✉ Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="🔒 Password"
              onChange={(e) => setPassword(e.target.value)}
              />
              
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign In
            </Button>
            <Link to={'/forgotpassword'} className="text-md-left text-dark">Forgot Password ?</Link>
          </div>
        </Form>
       
      <div className="p-2 box mt-4 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      </div>
        
        </>
    )

}

export default Login