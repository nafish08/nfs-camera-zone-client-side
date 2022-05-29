import React from 'react';

const BusinessSummary = () => {
    return (
        <section>
            <h1 className='text-3xl uppercase font-bold text-center mt-12'>Our Business Stats</h1>
            <div className='flex justify-center my-12'>
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title">Total Orders</div>
                        <div className="stat-value">2000</div>
                        <div className="stat-desc">↗︎ 50 (2%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Total Delivered</div>
                        <div className="stat-value">10000</div>
                        <div className="stat-desc">80% done</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Customers</div>
                        <div className="stat-value">3520</div>
                        <div className="stat-desc">↗︎ 60 (14%)</div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default BusinessSummary;