import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <section className=''>
            <div className="hero min-h-screen" style={{ background: `url(${banner})`, backgroundSize: 'cover' }}>
                <div className="bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to NFS Camera Zone</h1>
                        <p className="mb-5">You've come to the correct site if you're looking for the
                            top camera parts manufacturer in Bangladesh. Please browse our products and
                            services by scrolling down.</p>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;