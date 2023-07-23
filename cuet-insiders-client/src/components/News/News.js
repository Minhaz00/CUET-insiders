import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './LeftNav';
import AllNews from './AllNews';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();

    return (
        <div>
            <Container className='mt-4'>
                <Row>
                    <Col lg='3'>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg='8'>
                        <AllNews news={news}></AllNews>
                    </Col>
                    <Col lg='1'>

                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default News;

// 1. All news
// 3. hall = done
// 4. sports = done
// 5. admission = done
// 6. Club = done
// 7. programs = done
// =========id not given