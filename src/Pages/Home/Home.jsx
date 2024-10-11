import React from 'react';
import Hero from '../../Component/Hero/Hero';
import HomeAbout from '../../Component/HomeAbout/HomeAbout';
import HowItWork from '../../Component/HowItWork/HowItWork';
import NewOffers from '../../Component/NewOffers/NewOffers';
import StatsSection from '../../Component/StatsSection/StatsSection';
import MembershipOffer from '../../Component/MembershipOffer/MembershipOffer';
import Testimonials from '../../Component/Testimonials/Testimonials';
import NewsLetter from '../../Component/NewsLetter/NewsLetter';
import Cars from '../../Component/Cars/Cars';
import CarDetails from '../../Component/CarDetails/CarDetails';

const Home = () => {
    return (
        <div>
            <Hero />
            <Cars />
            <HomeAbout />
            <HowItWork />
            <StatsSection />
            <NewOffers />
            <MembershipOffer />
            <Testimonials />
            <NewsLetter />
            <CarDetails />
        </div>
    );
};

export default Home;