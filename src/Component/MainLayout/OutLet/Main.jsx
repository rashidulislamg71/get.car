import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import NavBar from '../Header/NavBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;