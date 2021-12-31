import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className='min-vh-100 w-100 d-flex justify-content-center align-items-center'>
            <div>
                <Button
                    className='me-2'
                    variant="primary"
                    onClick={() => navigate('/join-rider')}
                >
                    Join as a Rider
                </Button>
                <Button
                    className='ms-2'
                    variant="warning"
                    onClick={() => navigate('/join-learner')}
                >
                    Join as a Driving Lesson learner
                </Button>
            </div>
        </div>
    );
};

export default Home;