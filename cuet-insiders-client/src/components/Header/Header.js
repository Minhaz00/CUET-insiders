import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo/logo.png';
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import './Header.css';
import { AuthContext } from '../../context/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {

    const { user, logout } = useContext(AuthContext);
    const handleSignOut = () => {
        logout()
            .then(() => console.log("logged out successfully!"))
            .catch ((error) => console.error(error));
    }

    return (
        <div className='navbar'>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/" >
                        <img className='logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 navs mx-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/">Home</Link>
                            <Link to="/feed">Feed</Link>
                            <Link to="/events">Events</Link>
                            <Link to="/news">News</Link>
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-dark"><FaSearch/></Button>
                        </Form> */}

                        <Navbar.Text>
                            
                            {user ?
                                <>
                                    {user.photoURL ?
                                        <Link to={`/user/${user.uid}`}>
                                            <Image className='ms-2 me-2' style={{ width: "40px", height: "40px"}} roundedCircle src={user.photoURL}></Image>
                                        </Link>
                                        :
                                        <FaUserCircle className='ms-2 me-2' style={{ fontSize: "35px" }}></FaUserCircle>
                                    }
                                    <button onClick={handleSignOut} className='btn btn-outline-dark py-1'>
                                        <FaSignOutAlt></FaSignOutAlt> Logout
                                    </button>

                                </>
                                :
                                <>
                                    <Link to={`/login`}>
                                        <button className='ms-2 btn btn-outline-dark py-1'>Login</button>
                                    </Link>
                                    <Link to={`/register`}>
                                        <button className='ms-2 btn btn-outline-dark py-1'>Signup</button>
                                    </Link>
                                </>
                            }

                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;