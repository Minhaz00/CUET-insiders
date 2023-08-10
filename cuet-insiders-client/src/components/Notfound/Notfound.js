import React from 'react';
import notfound from '../../assets/images/404/undraw_Page_not_found_re_e9o6-removebg-preview.png'
import './Notfound.css';
import { doubleUnderline } from '../Home/SVGs';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const Notfound = () => {
    return (
        <div className="py-5 d-flex justify-content-center align-items-center notfound">
        <div className='left my-5 py-4'>
            <img src={notfound} alt=""   />
        </div>    
        <div className='right mt-5'>
            <h2 className='mb-0'>The page you requested is not found!</h2>
            {doubleUnderline}
                <p className='text-muted'>
                    Users sees this page when they try to reach a non-existent page on our website. It 's the page server displays when it can 't find the URL requested by the users.
                </p>

            <Link to="/">
                <button className='btn btn-outline-dark'>Back to home <FaArrowRight></FaArrowRight> </button>        
            </Link>

        </div>
    </div>
    );
};

export default Notfound;