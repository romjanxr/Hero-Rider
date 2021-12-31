import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    let navigate = useNavigate();
    return (
        <div className='bg-transparent'>
            <div className='container pt-3 d-flex justify-content-between align-items-center'>
                <img onClick={() => navigate('/')} className='img-width' src={logo} alt="" />
                {
                    !user.email ? <Button onClick={() => navigate('/login')} variant="primary">
                        Login
                    </Button>
                        :
                        <Button onClick={logOut} variant="primary">
                            Logout
                        </Button>
                }
            </div>
        </div>
    );
};

export default Header;