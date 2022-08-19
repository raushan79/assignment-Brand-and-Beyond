import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/useAuthContext";

const Home = () => {
  const { logout, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="text-center home-profile">
          Hello Welcome <br />
          {user && user.email}
          <div className="gap-2">
            <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>

        <div className="home-content text-center p-4">
            <h1>Home Page</h1>
            <p>Here we can show home page content after login the use this is private route so use can't access this page without login</p>
        </div>
      </div>
    </>
  );
};

export default Home;
