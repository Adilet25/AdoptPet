import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContextProvider';

const Register = () => {

    const { handleRegister } = useAuth()

    const navigate = useNavigate()

    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [phoneNumber, setPhoneNumber ] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    function handleSave(e){
        e.preventDefault()
        
        if(!name.trim() || !password.trim() || !passwordConfirm.trim()){
            alert('Заполните поля')
        } else{
            let formData = new FormData()
            formData.append('username', name)
            formData.append('email', email)
            formData.append('phone_number', phoneNumber)
            formData.append('password', password)   
            formData.append('password2', passwordConfirm)
            handleRegister(formData, name)
        }
    }

    return (
        <div>
            <form action="submit" onSubmit={handleSave}>
                <input onChange={(e) => setName(e.target.value)} type="text"  placeholder='Name' />
                <input  onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' />
                <input onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder='+XXXXXXXXX' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
                <input onChange={(e) => setPasswordConfirm(e.target.value)} type="password" placeholder='Confirm password' />
                <button>Sign up</button>
            </form>
                <a href="#" onClick={() => navigate('/login')}>Have account? Login here</a>
        </div>
    );
};

export default Register;