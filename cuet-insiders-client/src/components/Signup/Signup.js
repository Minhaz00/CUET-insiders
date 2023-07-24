import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
// import { toast } from 'react-hot-toast';
import logo from '../../assets/images/logo/name-Logo.png'


const SignUp = () => {

    const [error, setError] = useState("");
    const [TAndCAccepted, setTAndCAccepted] = useState(false);
    const { user, setUser, createUser, updateUserProfile } = useContext(AuthContext);

    

    const handleSubmit = event => {
        event.preventDefault(); 
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, name, password, confirm, photoURL);

        if (password.length < 6) {
            setError("Password must be at least 6 characters!");
            return;
        }

        if (password !== confirm) {
            setError("Please make sure your password match!");
            return;
        }

        createUser(email, password)
            .then(result => {
                setUser(result.user);
                console.log(user);
                setError("");
                form.reset();
                handleProfileUpdate(name, photoURL);
                // toast.success("Account created successfully!");
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
        
    }

    const handleProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setTAndCAccepted(event.target.checked);
    }

    return (
        <div className='login m-auto shadow rounded-4 mt-3 mb-5'>
            <div className='w-50 mt-3 m-auto text-center'>
                <Link to={'/'}>
                    <img className='w-100 mb-2' src={logo} alt="" srcset="" />
                </Link>
                <h5>Register</h5>
            </div>
            <Form onSubmit ={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Username" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email"  required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirm' type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" label=<p>Accept our <Link to={'/TandC'}>Terms and Conditions</Link></p>>
                    </Form.Check>
                </Form.Group>
                

                <p className='text-danger'><small>{error}</small></p>

                <Button className='w-100' variant="outline-dark" type="submit" disabled={!TAndCAccepted}>
                    Sign Up
                </Button>
                <br />
                <Form.Text className="">
                    Already have an account? <Link to={'/login'}>Please login</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default SignUp;