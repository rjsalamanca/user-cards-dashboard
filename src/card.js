import React from 'react';

const cardStyle = {
    borderBottom: 'solid 1px rebeccapurple',
    padding: '16px'
}

const Card = props => {
    const { user } = props;
    return (
        <div className="card" style={cardStyle}>
                <img src={user.picture.large} alt={user.name.first} />
                <p>{user.name.first} {user.name.last}</p>
        </div>
    );
}

export default Card;