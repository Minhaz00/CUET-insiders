import React from 'react';
import { Link } from 'react-router-dom';
import logoname from '../../assets/images/logo/Full name logo.png';
import img1 from '../../assets/images/Home/undraw_Remote_meeting_re_abe7-removebg-preview.png'
import img2 from '../../assets/images/Home/undraw_Solution_mindset_re_57bf-removebg-preview.png'
import img3 from '../../assets/images/Home/undraw_Questions_re_1fy7-removebg-preview.png'
import img4 from '../../assets/images/Home/undraw_Researching_re_fuod-removebg-preview.png'
import img5 from '../../assets/images/Home/undraw_Up_to_date_re_nqid-removebg-preview.png'
import img6 from '../../assets/images/Home/undraw_schedule_meeting_52nu-removebg-preview.png'


import './Home.css'
import { FaArrowRight, FaWandMagicSparkles } from "react-icons/fa6";
import FAQ from './FAQ';
import { doubleUnderline, exclamation, funUnderline, twoLines } from './SVGs';

const Home = () => {
    return (
        <div className='main'>
            
            <div className="section-1">
                
            {/* Banner section */}
            <div className="mb-5 d-flex justify-content-center align-items-center">
                <div className='banner pt-5 pb-5 mt-5'>
                    
                    <div className='mb-3'>
                    {twoLines} &nbsp;&nbsp;
                        <img className='logoname' src={logoname} alt="" />
                    </div>

                    <h1 className='mb-0 fw-bolder'>Where experience meets aspirations {exclamation}</h1>
                    
                    <p>A platform for proper advice, guidance and support for your future career. Leverage the true potential and grow a network with professionals.</p>
                    {funUnderline} <br /><br />

                    <Link to="/feed">
                        <button className='btn btn-outline-dark'><FaWandMagicSparkles></FaWandMagicSparkles>  Start exploring</button>        
                    </Link>
                </div> 
            </div>

                {/* Find mentor section */}
                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <img src={img2} alt=""   />
                    </div>    
                    <div className='right'>
                        <h2 className=' mb-0'>Find mentors of your choice</h2>
                        {doubleUnderline}
                        <p className='mt-2 text-muted'>Whether you're seeking career advice, personal development, or specialized expertise, we've got you covered. Take the first step towards realizing your full potential and let us help you find the mentor of your dreams. Start your transformative mentorship journey with us today!</p>
                        <Link to="/search">
                            <button className='btn btn-outline-dark'>Search mentor  <FaArrowRight></FaArrowRight></button>        
                        </Link>
                    </div>
                </div>
                

                {/* Post section */}
                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <h2  className='mb-0'>Unlock the power of knowledge sharing</h2>
                        {doubleUnderline}
                        <p className='mt-2 text-muted'>"CUET-INSIDERS" facilitates the seamless exchange of knowledge among a diverse community of learners, professionals, and mentors. Share your expertise, and insights through thought-provoking posts, fostering an atmosphere of collaboration and collective learning. Interact with post with reactions and comments.</p>

                        <Link to="/feed">
                            <button className='btn btn-outline-dark'>See posts <FaArrowRight></FaArrowRight> </button>        
                        </Link>

                    </div>    
                    <div className='right'>
                        <img src={img5} alt=""   />
                    </div>
                </div>

                
                {/* Appontment section  */}
                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <img src={img1} alt=""   />
                    </div>    
                    <div className='right'>
                        <h2 className='mb-0'>Guided 1-on-1 Mentorship through appointment</h2>
                        {doubleUnderline}
                        <p className='mt-2 text-muted'>Experience mentorship designed exclusively for you. Your mentor will dedicate focused time and attention to understand your aspirations, challenges, and goals, creating a tailored roadmap for your personal and professional development.</p>

                        <Link to="/search">
                            <button className='btn btn-outline-dark'>Search mentor <FaArrowRight></FaArrowRight> </button>        
                        </Link>

                    </div>
                </div>

                
                {/* Events section */}
                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <h2  className='mb-0'>Empowering Minds Through Professional Events</h2>
                        {doubleUnderline}
                        <p className='mt-2 text-muted'>Join us for a captivating and enriching experience in our exclusive Events, thoughtfully organized by seasoned professionals. Dive into a world of cutting-edge technology, breakthrough research, and dynamic discussions that redefine the boundaries of engineering excellence.Engage with top-notch professionals and experts in various fields.</p>

                        <Link to="/events">
                            <button className='btn btn-outline-dark'>Explore events <FaArrowRight></FaArrowRight> </button>        
                        </Link>

                    </div>    
                    <div className='right'>
                        <img src={img6} alt=""   />
                    </div>
                </div>

                
                {/* News section */}
                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <img src={img4} alt=""   />
                    </div>    
                    <div className='right'>
                        <h2 className='mb-0'>The best source for Real-Time Campus News</h2>
                        {doubleUnderline}
                        <p className='mt-2 text-muted'>"CUET-INSIDERS" is your one-stop news portal dedicated to keeping you informed and engaged with the latest updates and happenings on our vibrant university campus. Designed with students, faculty, and staff in mind, this platform offers a dynamic and immersive experience, ensuring you never miss a beat when it comes to campus life.</p>

                        <Link to="/news">
                            <button className='btn btn-outline-dark'>Browse news <FaArrowRight></FaArrowRight> </button>        
                        </Link>

                    </div>
                </div>


                {/* FAQ section */}
                <div className="pb-5 pt-5 d-flex justify-content-center align-items-center">
                    <div className='left'>
                        <FAQ></FAQ>
                    </div>    
                    <div className='right'>
                        <img src={img3} alt=""   />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;