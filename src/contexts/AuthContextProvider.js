import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'https://zoonet.onrender.com/api/v1'

export const authContext = createContext()
export const useAuth = () => useContext(authContext)

const AuthContextProvider = ({children}) => {

    const navigate = useNavigate()

    const [user, setUser] = useState(null)


    const handleRegister = async (formData, name) => {
        try {
            const res = await axios.post(`${API}/account/register/`, formData)
            localStorage.setItem('name', name)
            setUser(name)
            navigate('/')
            console.log(res); 
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = async (formData, name) => {
        try {
            const res = await axios.post(`${API}/account/login/`, formData)
            localStorage.setItem('name', name);
            localStorage.setItem('tokens', JSON.stringify(res.data))
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const checkAuth = async () => {
        try {
            const tokens = JSON.parse(localStorage.getItem('tokens'))
            const Authorization = `Bearer ${tokens.access}`

            const config = {
                headers:{
                    Authorization
                }
            }

            const res = await axios.post(`${API}/account/refresh/`, {
                refresh: tokens.refresh,
                config,
            });
            localStorage.setItem('tokens', JSON.stringify({
                access: res.data.access,
                refresh: tokens.refresh
            }));
            const name = localStorage.getItem('name')
            setUser(name);

        } catch (error) {
            console.log(error);
            handleLogout()
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('name')
        localStorage.removeItem('tokens')
        setUser(false)
        navigate('/login')
    }

    const values={
        handleRegister,
        handleLogin,
        handleLogout,
        user,
        checkAuth,
    }

    return (
        <authContext.Provider value={values}>{children}</authContext.Provider>
    );
};

export default AuthContextProvider;