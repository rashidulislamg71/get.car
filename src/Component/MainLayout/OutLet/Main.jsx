import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import NavBar from '../Header/NavBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutDelivery from '../../AboutDelivery/AboutDelivery';

const Main = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <ScrollRestoration />
            <Outlet />
            <AboutDelivery />
            <Footer />
        </div>
    );
};

export default Main;