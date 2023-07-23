import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/name-Logo.png'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div className='pb-4'>
            <hr />
            <img className='w-25 d-block m-auto' src={logo} alt="" />
            <Container className='footer'>
                <Row className='mx-auto menu mt-3 mx-5'>
                    <Col xs={12} md={1}></Col>
                    <Col xs={12} md={2}>
                        <Link to={'/'}>
                            <button className='btn btn-outline-dark'>Home</button>
                        </Link>
                    </Col>
                    <Col xs={12} md={2}>
                        <Link to={'/'}>
                            <button className='btn btn-outline-dark'>Feed</button>
                        </Link>
                    </Col>
                    <Col xs={12} md={2}>
                        <Link to={'/'}>
                            <button className='btn btn-outline-dark'>Events</button>
                        </Link>
                    </Col>
                    <Col xs={12} md={2}>
                        <Link to={'/'}>
                            <button className='btn btn-outline-dark'>News</button>
                        </Link>
                    </Col>
                    <Col xs={12} md={2}>
                        <Link to={'/'}>
                            <button className='btn btn-outline-dark'>Find Mentor</button>
                        </Link>
                    </Col>
                    <Col xs={12} md={1}></Col>
                </Row>
                <Row className='mt-4'>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Row>
                        <Col md={3}><Link><FaFacebook /></Link></Col>
                        <Col md={3}><Link><FaInstagram/></Link></Col>
                        <Col md={3}><Link><FaTwitter/></Link></Col>
                        <Col md={3}><Link><FaLinkedin /></Link></Col>
                        </Row>
                    </Col>
                    <Col  md={4}></Col>
                </Row>
                <Row className='mt-3 mb-3 text-center'>
                    <small>&copy; Copyright 2023 | CUET-INSIDERS.</small>
                </Row>
                
            </Container>
        </div>
    );
};

export default Footer;

