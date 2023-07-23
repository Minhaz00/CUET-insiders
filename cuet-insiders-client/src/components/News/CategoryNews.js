import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNews from './AllNews';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './LeftNav';

const CategoryNews = () => {
    const category_news = useLoaderData();
    return (
        <div>
            <div>
                <Container className='mt-4'>
                    <Row>
                        <Col lg='3'>
                            <LeftNav></LeftNav>
                        </Col>
                        <Col lg='8'>
                            <AllNews news={category_news}></AllNews>
                        </Col>
                        <Col lg='1'>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>    
    );
};

export default CategoryNews;