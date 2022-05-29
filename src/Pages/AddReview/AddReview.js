import React from 'react';

const AddReview = () => {
    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-12 uppercase'>Please Add a Review</h2>
            <form >
                <div class="form-control w-full max-w-xs mx-auto">
                    <select class="select select-bordered">
                        <option disabled selected>Give Ratings</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <textarea class="textarea mt-4" rows={10} placeholder="Write your complements here..."></textarea>
                    <input type="submit" value='Add Review' class="input w-1/2 max-w-xs mt-4 mx-auto bg-primary text-white uppercase font-bold" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;