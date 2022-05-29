import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HeroSection from './HeroSection';
import OurServices from './OurServices';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <HeroSection></HeroSection>
            <OurServices></OurServices>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;