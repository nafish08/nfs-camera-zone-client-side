import React, { useEffect } from 'react';
import usePart from '../../hooks/usePart';
import Part from './Part';

const Parts = () => {
    const [products, setProducts] = usePart([]);
    useEffect(() => {
        fetch('https://nfs-camera-zone-server-side.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [setProducts])
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-3xl font-bold uppercase my-6'>Our Camera Parts</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Part
                        key={product._id}
                        product={product}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;