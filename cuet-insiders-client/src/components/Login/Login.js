import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import logo from '../../assets/images/logo/name-Logo.png'


const Login = () => {

    const [error, setError] = useState("");
    const { googleProviderLogin, signIn } = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError("");
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='login m-auto'>
            <div className='w-50 mt-3 m-auto text-center'>
                <Link to={'/'}>
                    <img className='w-75 mb-2' src={logo} alt="" srcset="" />
                </Link>
                <h4>Login</h4>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>

                <p className='text-danger'><small>{error}</small></p>

                <Button className='w-100' variant="outline-dark" type="submit">
                    Login
                </Button>

                <br />
                <Form.Text>
                    New Here? <Link to={'/register'}>Please register</Link>
                </Form.Text>
                <br /><br />
                <p className=''>----------------------- or -----------------------</p>
                <div className="d-lg-flex justify-content-center align-items-center">
                    <Button onClick={handleGoogleSignIn} className='mt-2 w-100' variant="outline-dark"><FaGoogle></FaGoogle>{' '}Login with Google</Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;