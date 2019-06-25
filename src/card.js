import React from 'react';

import CardBio from './cardBio';

const cardStyle = {
    margin: '20px',
    padding: '10px 0px',
    background: 'linear-gradient(to bottom, #384350, #384350 45%, white 45%)'

}

const activeStyle = {
    padding: '10px 10px',
    display:'flex',
    justifyContent: 'space-between'
}

const imageContainerStyle = {
    padding: '10px 10px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
}

const Card = props => {
    const { user } = props;
    return (
        <div className="card" style={cardStyle}>
            <div style={activeStyle}>
                <i className="fas fa-ellipsis-v"></i>
                <span><i className="fas fa-circle"></i>active</span>
                <i className="far fa-eye"></i>
            </div>
            <div style={imageContainerStyle}>
                <i className="far fa-envelope"></i>
                <img src={user.picture.large} alt={user.name.first} />
                <i className="far fa-comment-dots"></i>
            </div>

            <h4>{user.name.first} {user.name.last}</h4>

            <CardBio user={user}/>
        </div>
    );
}

export default Card;