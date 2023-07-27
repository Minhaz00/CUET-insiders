import React, { useContext } from 'react';
import './Leftnav.css';
import { AuthContext } from '../../context/AuthProvider';

const Leftnav = () => {
    const {user} = useContext(AuthContext);
    return (
        <div class="card border-0 shadow">
            <div class="upper">
                <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZWJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" srcset="" />
            </div>
            <div class="user text-center">
                <div class="profile">
                    <img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width="80" alt="" />
                </div>
            </div>

            <div className='mt-5 text-center'>
                <p className='fw-bold mb-0'>{user.displayName}</p>
                <p className='mb-0'><small>Programmer | Web developer</small></p>
            </div>

            <hr />

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