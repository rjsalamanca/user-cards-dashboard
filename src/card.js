import React from 'react';

import CardBio from './cardBio';
import './card.css';

const Card = props => {
    const { user } = props;
    return (
        <div className = "card">
            <div className = "activeContainer">
                <i className = "fas fa-ellipsis-v"></i>
                <span><i style = {{fontSize: '0.5em', color: 'green', marginRight: '5px', verticalAlign: 'middle'}} className="fas fa-circle"></i>active</span>
                <i className="far fa-eye"></i>
            </div>
            <div className = 'imageContainer'>
                <i className="far fa-envelope"></i>
                <img style={{border: '5px solid white', borderRadius: '3px'}} src={user.picture.large} alt={user.name.first} />
                <i className="far fa-comment-dots"></i>
            </div>

            <h4>{user.name.first} {user.name.last}</h4>

            <CardBio user={user}/>
        </div>
    );
}

export default Card;