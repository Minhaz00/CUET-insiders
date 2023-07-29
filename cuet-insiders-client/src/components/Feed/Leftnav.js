import React, { useContext } from 'react';
import './Leftnav.css';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';


const Leftnav = () => {

    const { currUser } = useContext(AuthContext);
    const { displayName, photoURL, bio, coverURL, userId } = currUser;

    return (
        <div className="card sticky-md-top border ">
            <div className="upper">
                <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZWJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
            </div>
            <div className="user text-center">
                <div className="profile">
                    <Link to={`/user/${userId}`}><img src={photoURL} className="rounded-circle" width="80" alt="" /></Link>
                </div>
            </div>

            <div className='mt-5 text-center'>
                <Link className='text-decoration-none text-body' to={`/user/${userId}`}><p className='fw-bold mb-0'>{displayName}</p></Link>
                
                <p className='mb-0'><small>Bio : {bio}</small></p>
            </div>

            <hr></hr>

            <div>
                <div className="d-flex justify-content-between px-3">
                    <p><small>Followers: </small></p>
                    <p><small>22</small></p>
                </div>
                <div className="d-flex justify-content-between px-3">
                    <p><small>Following: </small></p>
                    <p><small>22</small></p>
                </div>
                <div className="d-flex justify-content-between px-3">
                    <p><small>My items: </small></p>
                    <p><small>22</small></p>
                </div>
            </div>
        </div>
    );
};

export default Leftnav;