import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectAuth } from '../libs/slice';

const NavBar = () => {
    const authenticated = useSelector(selectAuth);

    return (
        <nav className="navbar navbar-expand navbar-light">
            <Link className="navbar-brand" href="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" href="/users/user">Inventory</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" href="/auth/login">{authenticated ? 'Log out' : 'Login'}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
