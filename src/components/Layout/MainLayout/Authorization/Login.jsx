import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContextProvider";
import logo from "../Authorization/auth-image/zoonet-logo.png";

const Login = () => {
  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSave(e) {
    e.preventDefault();

    if (!name.trim || !password.trim()) {
      alert("Заполните поля");
    } else {
      let formData = new FormData();
      formData.append("username", name);
      formData.append("password", password);
      handleLogin(formData, name);
    }
  }

  return (
    <div className="flex justify-center items-center mt-28">
      <div className="login-container flex h-[30vmax] fixed z-10 backdrop-opacity-50">
        <div>
          <img className="login-icon mt-4" src={logo} alt="" />
        </div>
        <div className="flex items-center flex-col">
          <span className="login-title">Войти</span>
          <form action="submit" onSubmit={handleSave}>
            <TextField
              label="Ваше имя"
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <TextField
              label="Пароль"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <button onClick={() => navigate("/")}>ВОЙТИ</button>
          </form>
        </div>
        <span>Нет аккаунта?</span>
        <a href="#" className="mb-5" onClick={() => navigate("/register")}>
          Регистрация
        </a>
      </div>
    </div>
  );
};

export default Login;
