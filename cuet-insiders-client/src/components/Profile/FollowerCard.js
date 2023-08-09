import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import demoDp from '../../assets/images/logo/user.png';

const FollowerCard = ({follower}) => {
    
    const [usr, setUsr] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/user/${follower}`)
            .then(res => res.json())
            .then(data => setUsr(data[0]));
    }, [usr])

    return (
        <div className='w-50 shadow-sm border rounded-3 px-3 py-3 mx-2'>
            <div className='d-flex'>
                <Link to={`/user/${follower}`}>
                    <img  style={{ width: "50px", height: "50px"}} src={(usr?.photoURL)?usr.photoURL:demoDp} className=' rounded-circle' alt="" />
                </Link>

                <div className='ms-3'>
                    <Link className='text-decoration-none text-body' to={`/user/${follower}`}>
                        <p className='fw-bold mb-0'>{usr.displayName}</p>
                    </Link>
                    <p className='mb-0 text-muted'><small>{usr?.bio}</small></p>
                </div>
            </div>
        </div>
    );
};

export default FollowerCard;