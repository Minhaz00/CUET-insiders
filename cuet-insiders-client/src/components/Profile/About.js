import React from 'react';
import { FaIdCardAlt, FaMailBulk } from 'react-icons/fa';
import {  FaFacebook, FaInbox, FaLinkedin, FaLocationDot, FaMailchimp, FaMillSign, FaNetworkWired, FaShapes, FaUserTie } from 'react-icons/fa6';
import { ImOffice } from "react-icons/im";
import { SiGoogleclassroom } from "react-icons/si";


const About = ({ userProfile }) => {
    
    const {
        userId,
        deptName,
        position,
        institution,
        batch,
        currentLoc,
        facebook, 
        linkedin,
        mailSocial,
        interests,
    } = userProfile;

    // console.log(userProfile);


    return (
        <div className='ms-4 text-muted sticky-top'>
            <h5 className='mb-0 mt-2'>About</h5>
            <hr className='mt-0'></hr>
            <div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><FaUserTie/> <small>Working as </small></p>
                    <p className='mb-2'><small>{position? position : 'N/A'}</small></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><ImOffice/> <small>Institution </small></p>
                    <p className='mb-2'><small>{institution? institution:"N/A"}</small></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><FaLocationDot/> <small>City </small></p>
                    <p className='mb-2'><small>{currentLoc?currentLoc:"N/A"}</small></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><SiGoogleclassroom/> <small>Department </small></p>
                    <p className='mb-2'><small>{deptName?deptName:"N/A"}</small></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><FaIdCardAlt/> <small>Batch </small></p>
                    <p className='mb-2'><small>{batch?batch:"N/A"}</small></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><FaShapes/> <small>Interests </small></p>
                    <p className='mb-2'><small>{interests?interests:"N/A"}</small></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><FaNetworkWired/> <small>Connect </small></p>
                    <p className='mb-2'>
                        <a className='text-decoration-none text-muted ms-3' href={facebook}><FaFacebook/></a>
                        <a className='text-decoration-none text-muted ms-3' href={linkedin}><FaLinkedin/></a>
                        <a className='text-decoration-none text-muted ms-3' href={mailSocial}><FaMailBulk/></a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;