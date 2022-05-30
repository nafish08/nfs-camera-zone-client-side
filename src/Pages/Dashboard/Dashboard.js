import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100  bg-slate-700 text-white">
                    <Link className='bg-slate-600 mb-2 p-3' to={'/dashboard'}>My Orders</Link>
                    <Link className='bg-slate-600 mb-2 p-3' to={'/dashboard/addreview'}>Add Review</Link>
                    <Link className='bg-slate-600 mb-2 p-3' to={'/dashboard/myprofile'}>My Profile</Link>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;