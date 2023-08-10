import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import demoDp from '../../assets/images/logo/user.png';

const UserCard = ({ searchedUser }) => {
    
    const { user } = useContext(AuthContext);
    const { userId, photoURL, displayName, bio } = searchedUser;

    return (
        <div>
            <div className='mx-auto my-3 w-50 shadow-sm border rounded-3 px-1 py-2 '>
                <div className='d-flex mx-3'>
                    <Link to={`/user/${userId}`}>
                        <img  style={{ width: "50px", height: "50px"}} src={(photoURL)?photoURL:demoDp} className=' rounded-circle' alt="" />
                    </Link>

                    <div className='ms-3'>
                        <Link className='text-decoration-none text-body' to={`/user/${userId}`}>
                            <p className=' mb-0 fw-bold'>{displayName}</p>
                        </Link>
                        <p className='mb-0 text-muted overflow-hidden'><small>{bio}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;