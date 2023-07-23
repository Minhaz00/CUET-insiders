import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const news = useLoaderData();
    const { category_id, title, details, img, published_date } = news;

    return (
        <div className='event-details mt-3'>
            <Card>
                <Card.Img src={img} className='p-4 mx-auto'/>
                <Card.Body>
                    <Card.Header>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className=" mb-0 text-muted d-flex justify-content-between">
                            <p className='mb-0'><small>Published date: {published_date}  </small></p>
                        </Card.Subtitle>
                    </Card.Header>
                    <Card.Text className='p-3'>
                    {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button className='ms-3' variant="outline-dark">See similar news</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsDetails;