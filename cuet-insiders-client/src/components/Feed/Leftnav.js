import React, { useContext, useEffect, useState } from 'react';
import './Leftnav.css';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import demoCover from '../../assets/images/logo/demo-cover.jpg';
import demoDp from '../../assets/images/logo/user.png';


const Leftnav = () => {

    const { user } = useContext(AuthContext);    
    const [usr, setUsr] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.uid}`)
            .then(res => res.json())
            .then(data => {
                setUsr(data[0])
            });
    }, [usr]);

    return (
        <div className="card sticky-md-top border shadow-sm">
            <div className="upper">
                <img src={usr.coverURL?usr.coverURL:demoCover} alt="" />
            </div>
            <div className="user text-center">
                <div className="profile">
                    <Link to={`/user/${user.uid}`}><img src={usr.photoURL? usr.photoURL:demoDp} className="rounded-circle" width="80" alt="" /></Link>
                </div>
            </div>

            <div className='mt-5 text-center'>
                <Link className='text-decoration-none text-body' to={`/user/${user.uid}`}><p className='fw-bold mb-0 mx-1'>{usr.displayName}</p></Link>
                
                <p className='mb-0'><small>{usr.bio}</small></p>
            </div>

            <hr></hr>

            <div>
                <div className="d-flex justify-content-between px-3">
                    <Link className='text-decoration-none text-body' to={`/followers/${user?.uid}`}>
                        <small>Followers: </small>
                    </Link>
                    <p><small>{usr?.followers?.length}</small></p>
                </div>
                <div className="d-flex justify-content-between px-3">
                    <Link className='text-decoration-none text-body' to={`/following/${user?.uid}`}>
                        <small>Following: </small>
                    </Link>
                    <p><small>{usr?.following?.length}</small></p>
                </div>
                <div className="d-flex justify-content-between px-3">
                    <Link className='text-decoration-none text-body' to={`/bookmarks`}>
                        <small>My items: </small>
                    </Link>
                    <p><small>{usr?.bookmarks?.length}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Leftnav;