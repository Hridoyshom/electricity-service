import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import Loading from '../Pages/Shared/Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login')

    }

    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home');
    }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
    }
    return (
        <div className='register-form' >
            <h2>Register Here</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='your name' required />
                <input type="email" name="email" id="" placeholder='your Email' required />
                <input type="password" name="password" id="" placeholder='Your password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already Have an account <Link to='/login' className='text-primary text-decoration-none ' onClick={navigateLogin}  >Login Here</Link> </p>
        </div>
    );
};

export default Register;