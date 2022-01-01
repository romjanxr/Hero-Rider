import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Learner = () => {
    const [user, setUser] = useState({ role: 'Learner' });
    const [validated, setValidated] = useState(false);
    const [nid, setNid] = useState(null);
    const [profile, setProfile] = useState(null);
    const { registerUser } = useAuth();

    const handleSubmit = (e) => {
        if (user.password === user.cPassword) {
            registerUser(user.email, user.password);
        }

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        e.preventDefault();
        setValidated(true);

        const formData = new FormData();
        Object.keys(user).forEach(key => formData.append(key, user[key]));
        formData.append('nid', nid);
        formData.append('profile', profile);

        axios.post('https://guarded-brook-42731.herokuapp.com/users', formData)
            .then(res => console.log(res.data))
    }
    return (
        <div className='min-vh-100 w-100 d-flex justify-content-center align-items-center py-5'>
            <div className='form-width'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Your Name"
                            name="user[name]"
                            value={user.name || ""}
                            onChange={e => setUser({ ...user, name: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Your Email"
                            name="user[email]"
                            value={user.email || ""}
                            onChange={e => setUser({ ...user, email: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Your Age"
                            name="user[age]"
                            value={user.age || ""}
                            onChange={e => setUser({ ...user, age: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Your Address"
                            name="user[address]"
                            value={user.address || ""}
                            onChange={e => setUser({ ...user, address: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Your Phone"
                            name="user[phone]"
                            value={user.phone || ""}
                            onChange={e => setUser({ ...user, phone: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="profile">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control
                            required
                            type="file"
                            accept="image/*"
                            onChange={e => setProfile(e.target.files[0])}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nid">
                        <Form.Label>NID Picture</Form.Label>
                        <Form.Control
                            required
                            type="file"
                            accept="image/*"
                            onChange={e => setNid(e.target.files[0])}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Your Password"
                            name="user[password]"
                            value={user.password || ""}
                            onChange={e => setUser({ ...user, password: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="c-password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Re-type Password"
                            name="user[cPassword]"
                            value={user.cPassword || ""}
                            onChange={e => setUser({ ...user, cPassword: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="v-type">
                        <Form.Label>Vehicle Type</Form.Label>
                        <Form.Select
                            required
                            aria-label="Default select example"
                            name="user[vType]"
                            value={user.vType || ""}
                            onChange={e => setUser({ ...user, vType: e.target.value })}
                        >
                            <option value="">Select Vehicle Type</option>
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type="submit" variant="primary">Join As Learner</Button>
                </Form>
            </div>
        </div>
    );
};

export default Learner;