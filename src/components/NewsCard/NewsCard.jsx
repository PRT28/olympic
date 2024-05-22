import React from "react";
import './NewsCard.css';

const NewsCard = ({imgUrl, title, tag, linkUrl}) => {
    return (
        <div class="card" onClick={() => window.open(linkUrl, '_blank')}>
            <img src={imgUrl} alt="" />
            <div class="info">
                <div className="tag">{tag}</div>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default NewsCard;
