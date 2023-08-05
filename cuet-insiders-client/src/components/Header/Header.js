import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo/logo.png';
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import './Header.css';
import { AuthContext } from '../../context/AuthProvider';
import { Dropdown, Image, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import demoDp from '../../assets/images/logo/user.png';
import { FaBookmark, FaRegAddressCard, FaRegCalendarCheck } from 'react-icons/fa6';

const Header = () => {

    const { user, currUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const [usr, setUsr] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${currUser.userId}`)
            .then(res => res.json())
            .then(data => {
                setUsr(data.userProfile[0])
            });
    }, [currUser]);

    const handleSignOut = () => {
        logout()
            .then(() => console.log("logged out successfully!"))
            .catch((error) => console.error(error));
        
        navigate('/')
    }
    

    return (
        <div className='navbar border-secondary-subtle'>
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
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"                            />
                            <Button variant="outline-dark"><FaSearch/></Button>
                        </Form> */}

                        <Navbar.Text>
                            
                            {(user && usr)?
                                <>
                                                  
                                    <Dropdown>  
                                        <Dropdown.Toggle variant=""  id="dropdown-basic">
                                            {(usr?.photoURL) ?
                                                <Image className=' me-2' style={{ width: "40px", height: "40px"}} roundedCircle src={usr.photoURL}></Image>
                                                :
                                                <Image className=' me-2' style={{ width: "40px", height: "40px"}} roundedCircle src={demoDp}></Image>
                                            }
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <Link className=' text-decoration-none' to={`/user/${user?.uid}`}>My profile</Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item>
                                                <Link className=' text-decoration-none' to={'/appointments'}>Appointments</Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item>
                                                <Link className=' text-decoration-none' to={'bookmarks'}>Saved items</Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item onClick={handleSignOut} className=' text-danger'>
                                               Logout
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
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