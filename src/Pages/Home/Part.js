import React from 'react';

const Part = ({ product }) => {
    const { name, description, minquantity, quantity, price, img } = product;
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
                    <button className="btn btn-primary text-white uppercase">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;