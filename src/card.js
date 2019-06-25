import React from 'react';

import CardBio from './cardBio';
import './card.css';

const Card = props => {
    const { user } = props;
    return (
        <div className = "card">
            <div className = "activeContainer">
                <i className = "activeImage fas fa-ellipsis-v"></i>
                <span><i className="activeCircle fas fa-circle"></i>active</span>
                <i className = "activeImage far fa-eye"></i>
            </div>
            <div className = 'imageContainer'>
                <i className="iconImage far fa-envelope"></i>
                <img className="image" src={user.picture.large} alt={user.name.first} />
                <i className="iconImage far fa-comment-dots"></i>
            </div>

            <h4>{user.name.first} {user.name.last}</h4>

            <CardBio user={user}/>
        </div>
    );
}

export default Card;