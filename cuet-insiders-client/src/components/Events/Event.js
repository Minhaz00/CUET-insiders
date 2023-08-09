import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaArrowRight } from 'react-icons/fa6';

const Event = ({ event }) => {
    
    const { eventId, name, date, platform, banner } = event;

    return (
        <CardGroup>
            <Card className='event border shadow-sm'>
                <Card.Img variant="top" src={banner} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <small>This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</small>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/events/${eventId}`}>
                        <button className='btn btn-outline-dark'>View details <FaArrowRight></FaArrowRight> </button>
                    </Link>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Event;