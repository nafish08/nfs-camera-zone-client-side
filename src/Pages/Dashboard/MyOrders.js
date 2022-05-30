import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import usePart from '../../hooks/usePart';
import axios from 'axios';
import Part from '../Home/Part';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = usePart([]);
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://damp-island-00679.herokuapp.com/order?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    }, [user, setOrders])
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-3xl font-bold uppercase my-6'>You Orders Here</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                {
                    orders.map(product => <Part
                        key={product._id}
                        product={product}
                    >

                        <div className="card-actions">
                            <Link to={'/dashboard'}><button className="btn btn-primary text-white uppercase">Checkout</button></Link>
                        </div>
                    </Part>)
                }
            </div>
        </div>
    );
};

export default MyOrders;