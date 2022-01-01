import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const { loginUser } = useAuth();

    const handleSubmit = (e) => {
        loginUser(email, password, navigate);
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        e.preventDefault();
        setValidated(true);
    }
    return (
        <div className='min-vh-100 w-100 d-flex justify-content-center align-items-center py-5'>
            <div className='form-width'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Your Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Your Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button type="submit" variant="primary">Log In</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;