import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'>Q&A</h1>
            <div className='lg:mx-32'>
                <h1 className='text-2xl'>1. How will you improve the performance of a React Application?</h1>
                <p>We can boost the performance of a react application if we keep these in mind.When it's required, keep component state local.
                    React components should be remembered to avoid unwanted re-renders.
                    React code splitting with dynamic import ().
                    In React, this is known as windowing or list virtualization.
                    In React, lazy image loading is possible.</p><br /><br />
            </div>
            <div className='lg:mx-32'>
                <h1 className='text-2xl'>2. What are the different ways to manage a state in a React application?</h1>
                <p>In your React projects, there are four sorts of state that you must effectively manage:
                    Local (UI) state — The data we handle in one or more components is referred to as local state.
                    Global (UI) state - Data that we handle across various components is referred to as global state.
                    Data from an external server that must be merged with our UI state is called server state.
                    URL state - Information found on our URLs, such as pathnames and query parameters.</p><br /><br />
            </div>
            <div className='lg:mx-32'>
                <h1 className='text-2xl'>3. How does prototypical inheritance work?</h1>
                <p>Simply simply, prototype inheritance refers to the capacity of one object to access the properties
                    of another. To add new attributes and methods to an existing object constructor, we utilize a
                    JavaScript prototype. We may instruct our JS code to inherit attributes from a prototype in this
                    way. Through a reference pointer function, prototypical inheritance allows us to reuse
                    attributes or methods from one JavaScript object to another.</p><br /><br />
            </div>
            <div className='lg:mx-32'>
                <h1 className='text-2xl'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p>Because if you edit it (products) directly, executing setState() thereafter may merely
                    overwrite the modification you did, we set the state directly in React. If you explicitly
                    edit it, the value will be replaced anytime a user interacts with the page.</p><br /><br />
            </div>
            <div className='lg:mx-32'>
                <h1 className='text-2xl'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <img src="https://i.ibb.co/dMnfyDr/Screenshot-2022-05-29-220802.png" alt="" /><br /><br />
            </div>
        </div>
    );
};

export default Blogs;