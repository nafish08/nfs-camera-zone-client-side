import React from 'react';

const OurServices = () => {
    return (
        <div className='my-12'>
            <h1 className='text-center text-3xl uppercase font-bold mb-5'>Our Services</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Custom Camera Parts</h2>
                        <p>Designed and Build to Your Specification</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Quality Services</h2>
                        <p>Your Partner From Start To Finish Beyond</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">All Over BD</h2>
                        <p>You Can Order Anywhere In The Country</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;