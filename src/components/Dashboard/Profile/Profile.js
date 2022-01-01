import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get(`https://guarded-brook-42731.herokuapp.com/users?email=${user.email}`)
            .then(res => setUserData(res.data.users))
    }, [user.email])

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='text-center'>
                <h2>Welcome {userData.name}</h2>
                <p>{userData.email}</p>
                <p>{userData.phone}</p>
                <p>role: <b>{userData.role}</b></p>
            </div>
        </div>
    );
};

export default Profile;