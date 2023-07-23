import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const news = useLoaderData();
    const { category_id, title, details, img, published_date } = news;

    return (

        <div className='p-5 event-details shadow rounded-3 mt-3 w-75'>
            
            <Image className='w-100' src={img} fluid rounded />

            <h2 className='mt-5 '>{title}</h2>
            <p className='text-muted'>{published_date}</p>
            <small>{details}</small><br />
            <Link to={`/category/${category_id}`}>
                <Button className='mt-3' variant="outline-dark">See similar news</Button>
            </Link>
        </div>
    );
};

export default NewsDetails;