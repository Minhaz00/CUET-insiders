import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import demoDp from '../../assets/images/logo/user.png';
import { AuthContext } from '../../context/AuthProvider';
import './RightNav.css';

const SuggestedUser = ({person}) => {

    const { user } = useContext(AuthContext);
    const [usr, setUsr] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${person}`)
            .then(res => res.json())
            .then(data => {
                setUsr(data[0])
            });
    }, [usr]);


    // ============= handling follow / unfollow ===================
    const [toggleFollow, setToggleFollow] = useState(true);

    // handling follow 
    const handleFollow = () => {
        setToggleFollow(toggleFollow ^ 1);
        let profileOwner = person;              
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
        <div className='shadow-sm border rounded-3 mb-2 px-1 py-1 d-flex justify-content-between align-items-center card-container' >
            <div>
                <div className='d-flex'>
                    <Link to={`/user/${person}`}>
                        <img  style={{ width: "50px", height: "50px"}} src={(usr?.photoURL)?usr.photoURL:demoDp} className=' rounded-circle' alt="" />
                    </Link>

                    <div className='ms-1'>
                        <Link className='text-decoration-none text-body' to={`/user/${person}`}>
                            <p className='txt-name mb-0 fw-bold'>{usr.displayName}</p>
                        </Link>
                        <p className='txt-bio mb-0 text-muted overflow-hidden'><small>{usr?.bio?.slice(0, 28) + " ..."}</small></p>
                        <div>
                            <button onClick={handleFollow} className='btn btn-outline-dark py-0 mt-1 '>
                                <small className='txt-btn'>Follow</small>
                            </button>
                        </div>
                    </div>

                    
                </div>
            </div>

            
        </div>
    );
};

export default SuggestedUser;