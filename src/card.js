import React from 'react';

import CardBio from './cardBio';

const cardStyle = {
    border: 'solid 1px rebeccapurple',
    padding: '10px 0px',
}

const imageContainerStyle = {
    border: '1px solid red',
    display: 'flex',
    alignItems: 'center'
}

const Card = props => {
    const { user } = props;
    return (
        <div className="card" style={cardStyle}>
            <div style={imageContainerStyle}>
                <i className="far fa-envelope"></i>
                <img src={user.picture.large} alt={user.name.first} />
                <i className="fas fa-comment-dots"></i>
            </div>
            <h4>{user.name.first} {user.name.last}</h4>

            <CardBio user={user}/>
        </div>
    );
}

export default Card;