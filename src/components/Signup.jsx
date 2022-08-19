import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/useAuthContext";


const Signup = () =>{
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword]=useState("")
    const {signup}=useUserAuth();
    const navigate=useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        if(password!==confirmPassword){
            setError("You Enterd Different Password")
            return ;
        }
        try {
            await signup(email,password);
            alert("Signup Sucessfull go to home page");
            navigate("/")
        } catch (error) {
            setError(error.message);
            
        }
    };

    return (
        <>
            <div className="p-4 box">
        <h2 className="mb-3 text-center">Welcome Back</h2>
        <p className="text-center .bg-success text-success">Please Signup to continue</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder=" ✉ Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder=" 🔒 Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder=" 🔒 Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
            <Link to={'/forgotpassword'} className="text-md-left text-dark">Forgot Password ?</Link>
          </div>
        </Form>
      <div className="p-2 box mt-4 text-center">
        Already have an account? <Link to="/login">Sign In</Link>
      </div>
      </div>
        </>
    )

}

export default Signup