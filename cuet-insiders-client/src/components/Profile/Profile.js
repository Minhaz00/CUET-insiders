import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Profile.css';
import { FaCalendarDay, FaTag, FaUserCheck, FaUserPlus, FaUsers } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';
import About from './About';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {

    const userprofile = useLoaderData();
    const { user } = useContext(AuthContext);
    
    const {
        userId,
        photoURL,
        coverURL,
        displayName,
        bio,
        email,
        isMentor,
        isAvailable,
        deptName,
        position,
        institution,
        studentId,
        currentLoc,
        interests
    } = userprofile[0];

    let coverPhoto = coverURL ? coverURL : 'https://htmlcolors.com/gradients-images/53-light-purple-gradient.jpg';

    return (

        <div className='p-2 event-details shadow rounded-3 mt-3 w-75'>
            {/* cover-picture  */}
            <div className="profile-cover">
                <img src={coverPhoto} alt="" />
            </div>

            {/* Profile-picture  */}
            <div className="profile-user text-center">
                <div className="profile-picture">
                    <img src={photoURL} className="rounded-circle shadow" width="150" alt="" />
                </div>
            </div>

            {/* info and update/follow  */}
            <div className='d-flex justify-content-between'>
                <div className='mt-5 pt-3 ps-4'>
                    <div className='mb-0'>
                        <h4 className='d-inline me-3'>{displayName}</h4>
                        
                    </div>
                    <div className="text-muted">
                        
                        <p className='m-0'><small>Software Engineer | Full stack | MERN</small></p>

                        {
                            (isMentor || 1) ? 
                                <p className='mb-0'> 
                                    <FaTag />
                                    <small className='ms-2'>Mentor</small>
                                </p>: <></>
                        }

                        {/* <p className='mb-0'> <FaCalendarDay /><small className='ps-2'>Joined August, 2022</small></p> */}

                        <p>
                            <FaUsers/>
                            <small className='ms-2'>12 Following</small>
                            <small className='ms-2'>12 Followers</small>
                        </p>
                    </div>
                </div>

                <div>
                    {
                        (user.uid === userId) ?
                            <button className="btn btn-dark mt-5 me-4 px-2 pt-1"><FaEdit /><small className='ps-2'>Update</small></button>
                            :
                            <>
                            {
                                    (true) ? 
                                        <button className="btn btn-dark mt-5 me-4 px-3 pt-1"><FaUserPlus /><small className='ps-2'>Follow</small></button>
                                        :
                                        <button className="btn btn-dark mt-5 me-4 px-3 pt-1"><FaUserCheck /><small className='ps-2'>Following</small></button>
                            }
                            </>
                    }
                    
                </div>
            </div>

            <hr className='mt-0'></hr>
            {/* Post, abouts */}
            <div>
                <Row>
                    <Col lg='5'>
                        <About key={userId} userprofile={userprofile[0]}></About>
                    </Col>                        
                    <Col lg='7'>
                        
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Profile;