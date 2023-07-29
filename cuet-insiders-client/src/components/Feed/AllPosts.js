import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Button, Form, Image, Modal } from 'react-bootstrap';
import { FaImage, FaSquareArrowUpRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './Allpost.css';
import Postcard from './Postcard';


const AllPosts = ({posts}) => {

    const { user } = useContext(AuthContext);           // firebase user
    const [show, setShow] = useState(false);            // for modal
    const [postImg, setPostImg] = useState('');         // for post image
    const [postText, setPostText] = useState('');       // for post text


    const handleShow = () => {                          // for modal open
        setShow(true);
    }            
    
    const handleClose = () => {                         // for modal open
        setShow(false);
    }            

    const postTextHandle = (event) => {                 // post-details handle
        const text = event.target.value;
        setPostText(text);
    }

    const convertBase64 = (event) => {                  // postImage => Binary
        var fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = () => {
            setPostImg(fileReader.result);
        };
        fileReader.onerror = (error) => {
          console.log(error);
        };
    }

    const handlePost = () => {
        setShow(false);
        let postDetails = postText;
        let postImage = postImg;
        let author = user.displayName;
        let authorId = user.uid;
        let authorImg = user.photoURL;
        let pubDate = new Date();
        let likes = [];
        let comments = [];
        const postObj = { pubDate, postDetails, postImage, author, authorId, authorImg, likes, comments };
        
        if (postText !== '' || postImg !== '') {
            fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(postObj)
            })
                .then(res => res.json())
                .then(data => { })
                .catch(err => console.error(err));
        }
        setPostText('');
        setPostImg('');
    }

    return (
        <div>
            {/* Upload post */}
            <div>
                <div  className='rounded-3 py-3 px-1 border-0 shadow-sm'>
                    <Link to={`/user/${user.uid}`}>
                        <Image className='ms-2 me-2' style={{ width: "50px", height: "50px"}} roundedCircle src={user.photoURL}></Image>
                    </Link>

                    <Button className='btn p-0 post-input rounded-3 bg-body-tertiary border-0' onClick={handleShow}>
                        <input className='w-100 shadow-sm border rounded-3 bg-body-tertiary postInput' type="text" name="" id="" placeholder="Start a post ..."/>
                    </Button>
                </div>

                {/* ======= POST MODAL ====== */}
                <Modal show={show} onHide={handleClose} >
                    
                    <Modal.Header closeButton>
                        <Modal.Title><small>Create post</small> </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                                
                            <Form.Group
                            className="mb-3 border-0"
                            controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Control className='shadow-sm' placeholder="What's on your mind?" as="textarea" rows={5} onBlur={postTextHandle}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>
                                    <h3  className='d-inline'><FaImage/></h3>
                                </Form.Label>
                                <Form.Control
                                    className='fileInput ms-2 shadow-sm d-inline'
                                    type="file"
                                    autoFocus
                                    onChange={convertBase64}
                                />
                            </Form.Group>
                        
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className='w-100' variant="dark" onClick={handlePost}>
                            Post <FaSquareArrowUpRight/>
                        </Button>
                    </Modal.Footer>

                </Modal>
            </div>

            
            {/* Show all posts */}
            {
                posts.map(post => <Postcard
                    key={post._id}
                    post={post}
                ></Postcard>)
            }

        </div>
    );
};

export default AllPosts;