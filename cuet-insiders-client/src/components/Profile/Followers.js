import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import FollowerCard from './FollowerCard';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Followers = () => {
    const { user } = useContext(AuthContext);
    const [usr, setUsr] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/user/${user?.uid}`)
            .then(res => res.json())
            .then(data => setUsr(data[0]));
    }, [usr])

    const { followers } = usr;


    return (
        <div className='w-75 mx-auto my-4 p-3 pb-5 border rounded-4'>
            
            <h5>
                <Link className='' to={`/user/${user?.uid}`}><FaArrowLeft className='text-dark'/></Link> 
                &nbsp; My followers ({followers?.length})
            </h5>
            <hr className='mt-0' />
            
            <div className='d-flex'>
            {
                followers?.map(follower => <FollowerCard
                    key={follower}
                    follower={follower}
                ></FollowerCard>)
            }
            </div>
        </div>
    );
};

export default Followers;