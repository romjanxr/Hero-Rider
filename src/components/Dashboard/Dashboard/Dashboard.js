import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import { MdDashboard, MdManageAccounts, MdLogout } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css'

const Dashboard = () => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    const { logOut, userRole } = useAuth();
    console.log(userRole)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='dashboard-navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'dashboard-nav active' : 'dashboard-nav'}>
                    <ul className='dashboard-nav-items'>
                        <li className='dashboard-nav-toggle' onClick={showSidebar}>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/dashboard">
                                <MdDashboard />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        {
                            userRole === 'Admin' &&
                            <>
                                <li className="nav-text">
                                    <Link to="/dashboard/registered-users">
                                        <AiIcons.AiOutlineUser />
                                        <span>Registered Users</span>
                                    </Link>
                                </li>
                            </>
                        }
                        {
                            userRole === 'Learner' &&
                            <>
                                <li className="nav-text">
                                    <Link to="/dashboard/packages">
                                        <FaIcons.FaServer />
                                        <span>Packages</span>
                                    </Link>
                                </li>
                            </>
                        }
                        <li className="nav-text">
                            <Link to="/home">
                                <AiIcons.AiFillHome />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link onClick={logOut} to="/">
                                <MdLogout />
                                <span>Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider >
            <div className={sidebar && "dashboard-container"}>
                <Outlet />
            </div>
        </>
    );
};

export default Dashboard;