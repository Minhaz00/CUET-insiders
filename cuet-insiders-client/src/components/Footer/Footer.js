import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Carousel, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/name-Logo.png'
import { FaFacebook,  FaTwitter, FaInstagram, FaDiscord, FaHouseMedical, FaSignsPost, FaTeamspeak, FaNewspaper } from "react-icons/fa6";

import carosel1 from '../../assets/images/Footer/computerclub.jpeg';
import carosel2 from '../../assets/images/Footer/cams.png';
import carosel3 from '../../assets/images/Footer/carrerclub.png';
import carosel4 from '../../assets/images/Footer/logo-carousel-3.png';
import carosel5 from '../../assets/images/Footer/logo-carousel-4.png';
import carosel6 from '../../assets/images/Footer/logo-carousel-6.png';
import carosel7 from '../../assets/images/Footer/rmabd.png';
import carosel8 from '../../assets/images/Footer/logopgs.png';

import './Footer.css'

const Footer = () => {
    return (

        <div className='pb-2 mt-5 border-top footer'>
            <img className='footerImg' src={logo} alt="" srcset="" />
            <div className='mx-auto d-flex justify-content-around'>
                <div className="social-links mt-3">
                    <h5>Find us</h5>
                    <ListGroup>
                        <ListGroup.Item className=' bg-body-secondary bg-opacity-10'>
                        <a  href="http://facebook.com"> <FaFacebook/> Facebook</a>
                        </ListGroup.Item>
                        <ListGroup.Item  className=' bg-body-secondary bg-opacity-10'>
                            <a  href="http://twitter.com"><FaTwitter/> Twitter</a>
                        </ListGroup.Item>
                        <ListGroup.Item   className=' bg-body-secondary bg-opacity-10'>
                            <a href="http://whatsapp.com"><FaDiscord/> Discord</a>
                        </ListGroup.Item>

                        <ListGroup.Item   className=' bg-body-secondary bg-opacity-10'>
                            <a href="http://instagram.com"><FaInstagram/> Instagram</a>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                
                <div className="social-links mt-3">
                    <h5>Navigate to</h5>
                    <ListGroup>
                        <ListGroup.Item className=' bg-body-secondary bg-opacity-10'>
                        <Link to={'/'}><FaHouseMedical/> Home</Link>
                        </ListGroup.Item>
                        <ListGroup.Item  className=' bg-body-secondary bg-opacity-10'>
                            <Link to={'/feed'}><FaSignsPost/> Feed</Link>
                        </ListGroup.Item>
                        <ListGroup.Item   className=' bg-body-secondary bg-opacity-10'>
                            <Link to={'/events'}><FaTeamspeak/> Events</Link>
                        </ListGroup.Item>
                        <ListGroup.Item   className=' bg-body-secondary bg-opacity-10'>
                            <Link to={'/news'}><FaNewspaper/> News</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>

                <div className="carosel-container mt-3">
                    <h5>Featured Clubs</h5>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block carImg"
                            src={carosel8}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block carImg"
                            src={carosel1}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block carImg"
                            src={carosel2}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block carImg"
                            src={carosel3}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block carImg "
                            src={carosel4}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block carImg "
                            src={carosel5}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block carImg "
                            src={carosel6}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block carImg "
                            src={carosel7}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>                                                                     
                </div>
            </div>
            <div className='text-center mb-2 mt-3'><small>&copy; Copyright 2023 | CUET-INSIDERS.</small></div>
        </div>
    );
};

export default Footer;

