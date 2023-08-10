import React, { useContext, useEffect, useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaTrash } from "react-icons/fa6";


const SavedPost = ({ post }) => {

    const { user } = useContext(AuthContext);
    const [savedPost, setSavedPost] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/posts/${post}`)
            .then(res => res.json())
            .then(data => setSavedPost(data[0]));
    }, [savedPost])

    const {_id,
        pubDate,
        postDetails,
        postImage,   
        authorId,
        author,
    } = savedPost;
    
    const [usr, setUsr] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${authorId}`)
            .then(res => res.json())
            .then(data => {
                setUsr(data[0]);
            })
    }, [authorId]);

    
    // ================ deleting saved post ==================
    const handleBookmark = () => {
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
        <div className='w-50 px-3 mx-auto w-50 '>
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
                                    <small>{pubDate?.slice(0, 10)}{"  "}{pubDate?.slice(12, 16)}</small>
                                </p>
                            </div>

                        </div>

                        <button className='btn' onClick={handleBookmark}><FaTrash/></button>

                    </div>
                </Card.Header>

                
                <Card.Body>
                    <Card.Text>
                         <p>{postDetails}</p>
                    </Card.Text>
                    {postImage? <Card.Img src={postImage} alt="" /> : <></>}
                </Card.Body>
            </Card>
        </div>
    );
};

export default SavedPost;