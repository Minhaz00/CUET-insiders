import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllPosts from './AllPosts';
import Leftnav from './Leftnav';
import Rightnav from './Rightnav';
import { AuthContext } from '../../context/AuthProvider';

const Feed = () => {

    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext); 

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [posts]);

    posts.sort(function(a, b) {
        let keyA = new Date(a.pubDate);
        let keyB = new Date(b.pubDate);
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    });
      

    return (
        <div>
            <Container className='mt-3'>
                <Row>
                    <Col lg='3'>
                        <Leftnav></Leftnav>
                    </Col>                        
                    <Col lg='6'>
                        <AllPosts ProfileUserId={user.uid} posts={posts}></AllPosts>
                    </Col>
                    <Col lg='3'>
                        <Rightnav></Rightnav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Feed;