import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    const navigateRegister = event => {
        navigate('/register')
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New Here <Link to='/register' className='text-danger text-decoration-none ' onClick={navigateRegister}  >Register Here</Link> </p>
        </div>
    );
};

export default Login;