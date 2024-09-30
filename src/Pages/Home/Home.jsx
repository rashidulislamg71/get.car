import React from 'react';
import Hero from '../../Component/Hero/Hero';
import HomeAbout from '../../Component/HomeAbout/HomeAbout';
import HowItWork from '../../Component/HowItWork/HowItWork';
import NewOffers from '../../Component/NewOffers/NewOffers';
import StatsSection from '../../Component/StatsSection/StatsSection';
import MembershipOffer from '../../Component/MembershipOffer/MembershipOffer';
import Testimonials from '../../Component/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Hero />
            <HomeAbout />
            <HowItWork />
            <StatsSection />
            <NewOffers />
            <MembershipOffer />
            <Testimonials />
        </div>
    );
};

export default Home;