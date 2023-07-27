import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllPosts from './AllPosts';
import Leftnav from './Leftnav';
import Rightnav from './Rightnav';

const Feed = () => {

    // cosnt post = useLoaderData();

    return (
        <div>
            <Container className='mt-4'>
                <Row>
                    <Col lg='3'>
                        <Leftnav></Leftnav>
                    </Col>                        
                    <Col lg='6'>
                        <AllPosts></AllPosts>
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