import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  
  const navigate = useNavigate()

  return <div>
    <a href="" onClick={() => navigate('/register')}>Sign Up</a>
  </div>
};

export default HomePage;
