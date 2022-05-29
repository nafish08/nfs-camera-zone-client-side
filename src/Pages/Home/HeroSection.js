import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero min-h-screen bg-base-200 my-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/SrwDf2h/29750.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold uppercase">look no further we have everything you need.</h1>
                    <p className="py-6">For over 5 years now, NFS Camera Zone has been manufacturing camera parts.
                        All of our workers come from a single source and are designed to work together flawlessly.</p>
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;