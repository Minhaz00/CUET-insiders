import React, { useContext, useEffect, useState } from 'react';
import {Button, Card, Form, Image, Modal} from 'react-bootstrap';
import { FaBookmark, FaShareNodes, FaEye, FaStar, FaShare, FaSquareArrowUpRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { BiSolidLike, BiSolidComment } from "react-icons/bi";
import ShowComments from './ShowComments';

const Postcard = ({ post }) => {

    const { user } = useContext(AuthContext);
    
    const {
        _id,
        pubDate,
        postDetails,
        postImage,   
        authorId,
        likes,
        comments
    } = post;
       
    const [usr, setUsr] = useState([]);  
    const [books, setBooks] = useState([]);
    const [toggleBookmark, setToggleBookmark] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/user/${authorId}`)
            .then(res => res.json())
            .then(data => {
                setUsr(data[0]);
                setBooks(data[0]?.bookmarks);
            })
    }, [usr]);

    //==================== toggling see more / see less ================================== 
    const [togglePost, setTogglePost] = useState(true);
    const handleTogglePost = () => {
        setTogglePost(togglePost ^ 1);
    }

    //==================== liking post and sending it to DB ==============================
    const isLikedPost = () => {
        let usr = likes?.find(u => u === user.uid)
        return usr ? true : false; 
    }

    const [toggleLikes, setToggleLikes] = useState(isLikedPost());

    const handleLikes = () => {
        setToggleLikes(toggleLikes ^ 1);

        let likedUser = user.uid;
        const likeObj = { likedUser };

        fetch(`http://localhost:5000/posts/likes/${_id}`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(likeObj)
        })
            .then(res => res.json())
            .then(data => {})
            .catch(err => console.error(err));
    }

    // =================== Comment-modal open / close ===================
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // =================== storing comment text===========================
    const [commentText, setCommentText] = useState('');
    const commentTextHandle = (event) => {              
        const text = event.target.value;
        setCommentText(text);
    }

    // =================== Saving the comment=============================
    const handleComment = () => {
        setShow(false);
        let commText = commentText;
        let commenter = user.displayName;
        let commenterId = user.uid;
        let commentDate = new Date();
        const commentObj = { commText, commenter, commenterId, commentDate };
        
        if (commText !== '') {
            fetch(`http://localhost:5000/posts/comments/${_id}`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(commentObj)
        })
            .then(res => res.json())
            .then(data => {})
            .catch(err => console.error(err));
        } 
        setCommentText('');
    }
    

    // =================== handling bookmark =============================

    const handleBookmark = () => {
        setToggleBookmark(toggleBookmark ^ 1);
        const userId = user?.uid;
        const postId = _id;
        const bookmarkObj = { userId, postId };

         fetch(`http://localhost:5000/bookmark`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(bookmarkObj)
        })
            .then(res => res.json())
            .then(data => {})
            .catch(err => console.error(err));

    }


    return (
        <div>
            <Card className='mt-3 shadow-sm'>
                <Card.Header className='py-0'>
                    <div className="d-flex justify-content-between">
                        <div className="author-details d-flex align-items-center">
                            
                            <Link to={`/user/${authorId}`}>
                                <Image className='m-0' style={{ width: "45px", height: "45px" }} roundedCircle src={usr?.photoURL} alt="" />
                            </Link>

                            <div className='my-2 ms-2'>
                                <Link className='text-decoration-none text-body' to={`/user/${authorId}`}>
                                    <p className='mb-0 fw-semibold'>{usr?.displayName}</p>
                                </Link>
                                
                                <p className='mb-0 text-muted'>
                                    <small>{pubDate.slice(0, 10)}{"  "}{pubDate.slice(12, 16)}</small>
                                </p>
                            </div>

                        </div>
                        <button className={toggleBookmark ? 'btn text-primary' : 'btn'} onClick={handleBookmark}>
                            <FaBookmark />
                        </button>
                    </div>
                </Card.Header>

                
                <Card.Body>
                    <Card.Text>
                        {
                            postDetails.length > 150 ? 
                                (togglePost) ? 
                                    <p className=' text-body-emphasis'>
                                        {postDetails.slice(0, 150) + " ..."}
                                        <button
                                            className='border-0 rounded text-decoration-underline fst-italic'
                                            onClick={handleTogglePost}
                                        >See more
                                        </button>
                                    </p>
                                    :
                                    <p>
                                        {postDetails} <br />
                                        <button
                                            className='border-0 rounded text-decoration-underline fst-italic'
                                            onClick={handleTogglePost}
                                        >See less
                                        </button>
                                    </p>
                                    
                                :
                                <p>{postDetails}</p>
                        }
                    </Card.Text>
                    {postImage? <Card.Img src={postImage} alt="" /> : <></>}
                </Card.Body>

                
                <Card.Footer className='d-flex justify-content-around'>
                    {/* Like and comment button  */}
                    <button className={toggleLikes ? 'btn px-4 text-primary': 'btn px-4'} onClick={handleLikes}> <BiSolidLike /> {likes?.length}</button>
                    <button className='btn px-4' onClick={handleShow}> <BiSolidComment/> {comments?.length}</button>
                    {/* <button className='btn px-4'> <FaShare/> 0</button> */}
                </Card.Footer>
            </Card>

            
            {/* Upload comment and show all comments for a post in Modal */}
            <Modal show={show} onHide={handleClose} scrollable>
                    
                <Modal.Header closeButton className='pt-2 pb-1'>
                    <Modal.Title><small>Comments</small> </Modal.Title>
                </Modal.Header>
                

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3 border-0 d-flex justify-content-between" controlId="exampleForm.ControlTextarea1">
                            
                            <Form.Control className='shadow-sm w-75' placeholder="What's on your mind?" as="textarea" rows={1} onBlur={commentTextHandle}/>
                            
                            <Button className='' variant="dark" onClick={handleComment} >Comment</Button>

                        </Form.Group>
                        
                    </Form>
                </Modal.Body>

                
                <div className='mx-3'>
                    {
                        comments?.map(comment => <ShowComments
                            key={comments.indexOf(comment)}
                            comment={comment}
                        ></ShowComments>)    
                    }
                </div>

            </Modal>

        </div>
    );
};

export default Postcard;