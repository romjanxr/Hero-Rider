import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Rider.css'

const Rider = () => {
    const [user, setUser] = useState({ role: 'rider' });
    const [validated, setValidated] = useState(false);
    const [dl, setDl] = useState(null);
    const [nid, setNid] = useState(null);
    const [profile, setProfile] = useState(null);
    const { registerUser } = useAuth();

    console.log(user)

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
        formData.append('dl', dl);
        formData.append('nid', nid);
        formData.append('profile', profile);

        axios.post('http://localhost:5000/riders', formData)
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
                    <Form.Group className="mb-3" controlId="dl">
                        <Form.Label>Driving License Image</Form.Label>
                        <Form.Control
                            required
                            type="file"
                            accept="image/*"
                            onChange={e => setDl(e.target.files[0])}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="area">
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Area"
                            name="user[area]"
                            value={user.area || ""}
                            onChange={e => setUser({ ...user, area: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nid">
                        <Form.Label>NID Image</Form.Label>
                        <Form.Control
                            required
                            type="file"
                            accept="image/*"
                            onChange={e => setNid(e.target.files[0])}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="profile">
                        <Form.Label>Profile Image</Form.Label>
                        <Form.Control
                            required
                            type="file"
                            accept="image/*"
                            onChange={e => setProfile(e.target.files[0])}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="vehicle-name">
                        <Form.Label>Vehicle Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Vehicle Name"
                            name="user[vName]"
                            value={user.vName || ""}
                            onChange={e => setUser({ ...user, vName: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="vehicle-model">
                        <Form.Label>Vehicle Model</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Vehicle Model"
                            name="user[vModel]"
                            value={user.vModel || ""}
                            onChange={e => setUser({ ...user, vModel: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="vehicle-palate">
                        <Form.Label>Vehicle Name Palate</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Vehicle Name Palate"
                            name="user[vPalate]"
                            value={user.vPalate || ""}
                            onChange={e => setUser({ ...user, vPalate: e.target.value })}
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
                    <Button type="submit" variant="primary">Join As Rider</Button>
                </Form>
            </div>
        </div>
    );
};

export default Rider;