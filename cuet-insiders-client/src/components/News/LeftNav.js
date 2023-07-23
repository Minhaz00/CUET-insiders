import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <h4>All categories</h4>
            <div className='d-flex  align-content-start flex-wrap d-lg-block categories'>
                {
                    categories.map(category => <p key = {category.id}>
                        <Link to={`/category/${category.id}`}>
                            <button className='btn btn-outline-dark me-2'>{category.name}</button>
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;