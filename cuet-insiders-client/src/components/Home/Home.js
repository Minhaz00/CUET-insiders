import React from 'react';
import logoname from '../../assets/images/logo/Full name logo.png'
import img2 from '../../assets/images/Home/undraw_Solution_mindset_re_57bf-removebg-preview.png'
import img3 from '../../assets/images/Home/undraw_Questions_re_1fy7-removebg-preview.png'
import img4 from '../../assets/images/Home/undraw_Researching_re_fuod-removebg-preview.png'
import img5 from '../../assets/images/Home/undraw_Up_to_date_re_nqid-removebg-preview.png'
import img6 from '../../assets/images/Home/undraw_schedule_meeting_52nu-removebg-preview.png'

import './Home.css'
import { FaArrowRight } from "react-icons/fa6";
import FAQ from './FAQ';
import { doubleUnderline, exclamation, funUnderline, twoLines } from './SVGs';

const Home = () => {

    return (
        <div className='main'>
            <div className="section-1">
                
            <div className="mb-5 d-flex justify-content-center align-items-center">
                <div className='banner pt-5 pb-5 mt-5'>
                    
                    <div className='mb-3'>
                        {twoLines} &nbsp;&nbsp;
                        <img className='logoname' src={logoname} alt="" />
                    </div>

                    <h1 className='mb-0 font-bold display-inline'>Where experience meets aspirations {exclamation}</h1>
                    
                    <p>A platform for proper advice, guidance and support for your future career. Leverage the true potential and grow a network with professionals.</p>
                    {funUnderline} <br /><br />

                    <button className='btn btn-outline-dark'>Start exploring <FaArrowRight></FaArrowRight> </button>
                </div> 
            </div>
                
                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <img src={img2} alt="" srcset="" />
                    </div>    
                    <div className='right'>
                        <h2 className='mb-0'>Find mentors of your choice</h2>
                        {doubleUnderline}
                        <p className='mt-2'>Whether you're seeking career advice, personal development, or specialized expertise, we've got you covered. Take the first step towards realizing your full potential and let us help you find the mentor of your dreams. Embrace growth, connect with your mentor, and embark on an inspiring path to excellence together. Start your transformative mentorship journey with us today!</p>
                    </div>
                </div>
                

                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <h2  className='mb-0'>Unlock the power of knowledge sharing</h2>
                        {doubleUnderline}
                        <p>"CUET-INSIDERS" facilitates the seamless exchange of knowledge among a diverse community of learners, professionals, and mentors. Share your experiences, expertise, and insights through thought-provoking posts, fostering an atmosphere of collaboration and collective learning. Interact with post with reactions and comments.</p>
                    </div>    
                    <div className='right'>
                        <img src={img4} alt="" srcset="" />
                    </div>
                </div>

                
                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <img src={img6} alt="" srcset="" />
                    </div>    
                    <div className='right'>
                        <h2 className='mb-0'>Guided 1-on-1 Mentorship through appointment &</h2>
                        {doubleUnderline}
                        <p className='mt-2'>Experience mentorship designed exclusively for you. Your mentor will dedicate focused time and attention to understand your aspirations, challenges, and goals, creating a tailored roadmap for your personal and professional development.</p>
                    </div>
                </div>

                
                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <h2  className='mb-0'>Empowering Minds Through Professional Events</h2>
                        {doubleUnderline}
                        <p>Join us for a captivating and enriching experience in our exclusive Events, thoughtfully organized by seasoned professionals. Dive into a world of cutting-edge technology, breakthrough research, and dynamic discussions that redefine the boundaries of engineering excellence.Engage with top-notch professionals and experts in various fields.</p>
                    </div>    
                    <div className='right'>
                        <img src={img4} alt="" srcset="" />
                    </div>
                </div>

                
                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <img src={img5} alt="" srcset="" />
                    </div>    
                    <div className='right'>
                        <h2 className='mb-0'>The best source for Real-Time Campus News</h2>
                        {doubleUnderline}
                        <p className='mt-2'>"CUET-INSIDERS" is your one-stop news portal dedicated to keeping you informed and engaged with the latest updates and happenings on our vibrant university campus. Designed with students, faculty, and staff in mind, this platform offers a dynamic and immersive experience, ensuring you never miss a beat when it comes to campus life.</p>
                    </div>
                </div>


                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <FAQ></FAQ>
                    </div>    
                    <div className='right'>
                        <img src={img3} alt="" srcset="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;