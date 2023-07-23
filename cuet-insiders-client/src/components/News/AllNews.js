import React from 'react';
import NewsCard from './NewsCard';

const AllNews = ({ news }) => {
    console.log(news);
    return (
        <div>
            {
                news.map(n => <NewsCard
                    key={n._id}
                    n = {n}
                ></NewsCard>)
            }
        </div>
    );
};

export default AllNews;