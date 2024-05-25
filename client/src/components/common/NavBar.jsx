import React from 'react';
import { Link, useLocation } from 'react-router-dom';


import {adminNavbar} from '../../utils/navbar';
import { useAuth } from '../../contexts/AuthContext';

import '../../styles/navbar.css'

function NavBar() {
    const {currentUser} = useAuth();
    const {pathname} = useLocation();
    const currentPage = pathname.split('/')[2];
    console.log(currentPage);

    console.log(pathname);

    const content = currentUser && currentUser.role === 'admin' ? adminNavbar : null;


    return (
        <nav className='navbar'>
            <h4>{`Hello ${currentUser.role === 'admin' ? 'Admin' : 'User'}!`}</h4>
            <ul className="nav-menue">
                {
                     content.map(item => {
                        const isActive = currentPage === item.link
                        return (<Link style={{color : isActive? 'blueviolet' : 'black'}}  to={item.link} key={item.label}>{item.label}</Link>)
                    })
                }
            </ul>

        </nav>
    );
}

export default NavBar;