import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {

        errorElement = <div>
            <p className='text-danger' >Error: {error.message}</p>
        </div>

    }
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register')

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='container w-50 mx-auto' >
            <h2 className='text-primary text-center mt-2 ' >Please login</h2>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
                </Form.Group>

                <Button className='d-block mx-auto ' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New Here <Link to='/register' className='text-primary text-decoration-none ' onClick={navigateRegister}  >Register Here</Link> </p>
            <p>Forgot Password? <Link to='/register' className='text-primary text-decoration-none ' onClick={resetPassword}  >Reset Password</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;