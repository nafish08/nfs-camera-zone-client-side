import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-12 uppercase'>Add or Update Your Info</h2>
            <form >
                <div className="form-control w-full max-w-xs mx-auto">
                    <input type="text" name='name' value={user.displayName} className="input w-full max-w-xs" />
                    <input type="email" name='email' value={user.email} className="input w-full max-w-xs mt-4" />
                    <input type="text" name='edu' placeholder='Education Qualification' className="input w-full max-w-xs mt-4" />
                    <input type="text" name='city' placeholder='Your City/District' className="input w-full max-w-xs mt-4" />
                    <input type="text" name='phone' placeholder='Your Phone Number' className="input w-full max-w-xs mt-4" />
                    <input type="text" name='linkedin' placeholder='Linkedin Profile Url' className="input w-full max-w-xs mt-4" />
                    <input type="submit" value='Submit' className="input w-1/2 max-w-xs mt-4 mx-auto bg-primary text-white uppercase font-bold" />
                    <input type="submit" value='Update' className="input w-1/2 max-w-xs mt-4 mx-auto bg-secondary text-white uppercase font-bold" />
                </div>
            </form>
        </div>
    );
};

export default MyProfile;