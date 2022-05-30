import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddInfo = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const porfolio = {
            name: user.displayName,
            email: user.email,
            education: event.target.education.value,
            skills: event.target.skills.value,
            projects: event.target.name.value,
            image: event.target.name.value,
        }
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(porfolio)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Porfolio created successfully`);
                }
                else {
                    toast(`Portfolio already exists in database`);
                }
            })
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-2xl font-bold uppercase text-center my-4'>Update Portfolio</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='name' value={user?.displayName} placeholder={user ? '' : 'Your Name'} class="input input-bordered w-full max-w-xs mt-2" />
                        <input type="email" name='email' value={user?.email} placeholder={user ? '' : 'Your Email'} class="input input-bordered w-full max-w-xs mt-2" />
                        <input type="text" name='education' placeholder="Education Qualification" class="input input-bordered w-full max-w-xs mt-2" />
                        <input type="text" name='skills' placeholder="Skills" class="input input-bordered w-full max-w-xs mt-2" />
                        <input type="text" name='projects' placeholder="Project Links" class="input input-bordered w-full max-w-xs mt-2" />
                        <input type="text" name='image' placeholder="Image URL" class="input input-bordered w-full max-w-xs mt-2" />
                    </form>
                    <div class="card-actions justify-center">
                        <Link to={'/portfolio'}><button class="btn btn-primary text-white">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddInfo;