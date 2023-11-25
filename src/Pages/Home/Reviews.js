import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://nfs-camera-zone-server-side.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <h1 className='text-3xl font-bold uppercase text-center mb-12'>Client Reviews</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;