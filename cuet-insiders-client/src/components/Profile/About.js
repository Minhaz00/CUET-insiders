import React from 'react';
import { FaLocationDot, FaShapes, FaUserTie } from 'react-icons/fa6';
import { ImOffice } from "react-icons/im";
import { SiGoogleclassroom } from "react-icons/si";


const About = ({ userprofile }) => {
    
    const {
        userId,
        isMentor,
        isAvailable,
        deptName,
        position,
        institution,
        currentLoc,
        interests
    } = userprofile;

    const pos = position ? position : 'N/A';
    const dept = deptName ? deptName : 'N/A';
    const loc = currentLoc ? currentLoc : 'N/A';
    const inst = institution ? institution : 'N/A';


    return (
        <div className='ms-4 text-muted'>
            <h5 className='mb-0 mt-2'>About</h5>
            <hr className='mt-0'></hr>
            <div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><FaUserTie/> <small>Working as </small></p>
                    <p className='mb-2'><small>{pos}</small></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><ImOffice/> <small>Institution </small></p>
                    <p className='mb-2'><small>{inst}</small></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><FaLocationDot/> <small>City </small></p>
                    <p className='mb-2'><small>{loc}</small></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><SiGoogleclassroom/> <small>Department </small></p>
                    <p className='mb-2'><small>{dept}</small></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className='mb-2'><FaShapes/> <small>Interests </small></p>
                    <p className='mb-2'><small>{interests}</small></p>
                </div>
            </div>
        </div>
    );
};

export default About;