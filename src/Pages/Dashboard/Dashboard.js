import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100  bg-slate-700 text-white">
                    <Link className='bg-slate-600 mb-2 p-3' to={'/myorders'}>My Orders</Link>
                    <Link className='bg-slate-600 mb-2 p-3' to={'/addreview'}>Add Review</Link>
                    <Link className='bg-slate-600 mb-2 p-3' to={'/myprofile'}>My Profile</Link>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;