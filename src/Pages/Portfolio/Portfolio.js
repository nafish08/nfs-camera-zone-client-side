import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Portfolio = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="overflow-x-auto w-1/2 mx-auto my-12">
            <h1 className='text-3xl font-bold uppercase text-center my-8'>My Portfolio</h1>
            <table className="table w-full">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{user?.displayName}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user?.email}</td>
                    </tr>
                    <tr>
                        <th>Education</th>
                        <td>B.Sc, HSC, SSC</td>
                    </tr>
                    <tr>
                        <th>Skills</th>
                        <td>React, Node, MongoDB, TailwindCSS, etc</td>
                    </tr>
                    <tr>
                        <th>Project Links</th>
                        <td><a href="https://github.com/nafish08/creative-convention-center-bootstrap">https://github.com/nafish08/creative-convention-center-bootstrap</a></td>
                    </tr>
                </tbody>
            </table>
            <div className='block text-center'>
                <button className="btn btn-secondary text-white uppercase">Update Info</button>
            </div>

        </div>
    );
};

export default Portfolio;