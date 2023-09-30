import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import demoDp from '../../assets/images/logo/user.png';
import { AuthContext } from '../../context/AuthProvider';

const FollowingCard = ({following}) => {
    
    const { user } = useContext(AuthContext);
    const [usr, setUsr] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/user/${following}`)
            .then(res => res.json())
            .then(data => setUsr(data[0]));
    }, [usr])


    // ============= handling follow / unfollow ===================
    const [toggleFollow, setToggleFollow] = useState(true);

    // handling follow 
    const handleFollow = () => {
        setToggleFollow(toggleFollow ^ 1);
        let profileOwner = following;              
        let loggedInUser = user?.uid;       
        const followObj = { profileOwner, loggedInUser };
        fetch(`http://localhost:5000/follow`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(followObj)
        })
            .then(res => res.json())
            .then(data => {})
            .catch(err => console.error(err));

    }

    return (
        <div className='shadow-sm border rounded-3 px-1 py-2 m-2 d-flex justify-content-between align-items-center'>
            <div  className='d-flex'>
                <Link to={`/user/${following}`}>
                    <img  style={{ width: "50px", height: "50px"}} src={(usr?.photoURL)?usr.photoURL:demoDp} className=' rounded-circle' alt="" />
                </Link>

                <div className='ms-3'>
                    <Link className='text-decoration-none text-body' to={`/user/${following}`}>
                        <p className='fw-bold mb-0'>{usr.displayName}</p>
                    </Link>
                    <p className='mb-0 text-muted'><small>{usr?.bio}</small></p>
                </div>
            </div>

            <div>
                <button onClick={handleFollow} className='btn btn-outline-dark'>Unfollow</button>
            </div>
        </div>
    );
};

export default FollowingCard;