import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ n }) => {
    const { _id, title, details, published_date, img } = n;
    return (
        
        <div class="card mb-3 shadow border-0">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="card-title">{title}</h6>
                        <div class="card-text">
                            {
                                details.length > 100 ? 
                                    <small>{details.slice(0, 100) + "..."}
                                        <Link to={`/news/${_id}`}>View details</Link></small>
                                    :
                                    <small>{details}</small>
                            }
                        </div>
                        <p class="card-text"><small class="text-body-secondary">Last {published_date}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;