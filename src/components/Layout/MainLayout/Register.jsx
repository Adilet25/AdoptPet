import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContextProvider';
import 'react-phone-input-2/lib/style.css'
import { TextField } from '@mui/material';

const Register = () => {

    const { handleRegister, showOTP, handleActivate, codes } = useAuth()

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

<div className='register-container'>
    <div>

            <form className='flex flex-col  items-center gap-4' action="submit" onSubmit={handleSave}>
                
                <TextField
                label='Ваше имя'
                onChange={(e) => setName(e.target.value)} type="text"
                />
                <TextField
                label='Электронная почта'
                onChange={(e) => setName(e.target.value)} type="email"
                />
                <span className='phone'>
                <PhoneInput
                
                country={'kg'}
                value={phoneNumber}
                onChange={setPhoneNumber}
                
                className='inp-phone'
                />

                </span>
                <TextField
                label='Пароль'
                onChange={(e) => setPassword(e.target.value)} type="password"
                />
                <TextField
                label='Подтвердите пароль'
                onChange={(e) => setPasswordConfirm(e.target.value)} type="password"
                />
                {/* <OTPInput className='border border-black'
                value={code}
                onChange={setCode}
                disabled={false}
                otpType='number'
                placeholder='code'
                autoFocus
                numInputs={4}
            renderInput={(codes) => <input {...codes} />}/> */}

                {/* <input 
                type="number"  
                value={code}
                onChange={(e) => setCode(e.target.value)}
            /> */}

                <button>Sign up</button>
                
            </form>
                <a href="#" onClick={() => navigate('/login')}>Have account? Login here</a>
        </div>
            </div>
        
    );
};

export default Register;