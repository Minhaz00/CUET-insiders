import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ShowComments = ({ comment }) => {
    // console.log(comment);
    const { commText, commenterId, commentDate } = comment;
    const [commenterName, setCommenterName] = useState('');

    //showing user name from user data so that any change in user reflects here as well
    useEffect(() => {
        fetch(`http://localhost:5000/user/${commenterId}`)
            .then(res => res.json())
            .then(data => setCommenterName(data[0].displayName));
    }, [])

    return (
        
        <Card className='mt-0 mb-2'>
                <Card.Header className='py-0 d-flex justify-content-between'>
                    <p className='m-0 fw-bold'><small>{commenterName}</small></p>
                <p className='m-0 text-muted'><small>{commentDate.slice(0, 10)}{" "}{commentDate.slice(12, 16)}</small></p>
                </Card.Header>
                
                <Card.Body className='m-0 py-1 fst-italic text-muted'>
                    <Card.Text>
                    <p className='mb-0'><small>{commText}</small></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        
        // <div className='border shadow'>
        //     <p className='m-0'><small>{commenterName}</small></p>
        //     <p className='m-0 text-muted'><small>{commentDate}</small></p>
        //     <p className='m-0 fst-italic text-muted'><small>{commText}</small></p>
        // </div>
    );
};

export default ShowComments;