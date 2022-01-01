import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center vh-100">
            <Loader
                type="Puff"
                color="#251D58"
                height={100}
                width={100}
            />
        </div>
    }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;