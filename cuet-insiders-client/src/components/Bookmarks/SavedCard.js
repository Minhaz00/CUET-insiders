import React, { useEffect, useState } from 'react';

const SavedCard = ({post}) => {

    const [savedPost, setSavedPost] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/posts/${post}`)
            .then(res => res.json())
            .then(data => setSavedPost(data[0]));
    }, [savedPost])

    return (
        <div>
            
        </div>
    );
};

export default SavedCard;