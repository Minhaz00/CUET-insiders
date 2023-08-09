import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowComments = ({ comment }) => {
    const { commText, commenterId, commentDate } = comment;
    const [commenterName, setCommenterName] = useState('');

    //showing user name from user data so that any change in user reflects here as well
    useEffect( () => {
        fetch(`http://localhost:5000/user/${commenterId}`)
            .then(res => res.json())
            .then(data => setCommenterName(data[0].displayName));
    }, [])

    return (
        
        <Card className='mt-0 mb-2'>
                <Card.Header className='py-0 d-flex justify-content-between'>
                    <Link className='text-decoration-none' to={`/user/${commenterId}`}><p className='m-0 fw-bold text-dark'><small>{commenterName}</small></p></Link>
                <p className='m-0 text-muted'><small>{commentDate.slice(0, 10)}{" "}{commentDate.slice(12, 16)}</small></p>
                </Card.Header>
                
                <Card.Body className='m-0 py-1 fst-italic text-muted'>
                    <Card.Text>
                    <p className='mb-0'><small>{commText}</small></p>
                    </Card.Text>
                </Card.Body>
            </Card>
    );
};

export default ShowComments;