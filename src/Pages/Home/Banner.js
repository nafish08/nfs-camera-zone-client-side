import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <section>
            <div class="hero min-h-screen" style={{ background: `url(${banner})`, backgroundSize: 'cover' }}>
                <div class="bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content text-white">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Welcome to NFS Camera Zone</h1>
                        <p class="mb-5">You've come to the correct site if you're looking for the
                            top camera parts manufacturer in Bangladesh. Please browse our products and
                            services by scrolling down.</p>
                        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;