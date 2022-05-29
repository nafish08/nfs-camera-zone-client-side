import React from 'react';

const BusinessSummary = () => {
    return (
        <section>
            <h1 className='text-3xl uppercase font-bold text-center mt-12'>Our Business Stats</h1>
            <div className='flex justify-center my-12'>
                <div class="stats stats-vertical lg:stats-horizontal shadow">
                    <div class="stat">
                        <div class="stat-title">Total Orders</div>
                        <div class="stat-value">2000</div>
                        <div class="stat-desc">↗︎ 50 (2%)</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Total Delivered</div>
                        <div class="stat-value">10000</div>
                        <div class="stat-desc">80% done</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Customers</div>
                        <div class="stat-value">3520</div>
                        <div class="stat-desc">↗︎ 60 (14%)</div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default BusinessSummary;