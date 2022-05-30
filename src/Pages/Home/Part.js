import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Part = ({ product }) => {
    const { _id, name, description, minquantity, quantity, price, img } = product;
    const navigate = useNavigate();
    const navigateToPurchsase = _id => {
        // _id as parameter
        navigate(`/part/${_id}`);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="camera-parts" className="rounded-xl w-1/2" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <small>Minimum Order Quantity: {minquantity}</small>
                <small>Available Quantity: {quantity}</small>
                <small>Price: {price}BDT (per unit)</small>
                <div className="card-actions">
                    <Link to={'/dashboard'}><button onClick={() => navigateToPurchsase(_id)} className="btn btn-primary text-white uppercase">Place Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Part;