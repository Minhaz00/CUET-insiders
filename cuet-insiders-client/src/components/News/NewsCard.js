import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ n }) => {
    const { _id, title, details, published_date, img } = n;
    return (
        
        <div  className="card mb-3 shadow-sm border">
            <div  className="row g-0">
                <div  className="col-md-4">
                    <img src={img}  className="img-fluid rounded-start w-100" alt="..."/>
                </div>
                <div  className="col-md-8">
                    <div  className="card-body">
                        <h6  className="card-title">{title}</h6>
                        <div  className="card-text">
                            {
                                details.length > 100 ? 
                                    <small>{details.slice(0, 100) + "..."}
                                        <Link to={`/news/${_id}`}>View details</Link></small>
                                    :
                                    <small>{details}</small>
                            }
                        </div>
                        <p  className="card-text"><small  className="text-body-secondary">Last {published_date}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;