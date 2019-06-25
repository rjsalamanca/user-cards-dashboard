import React from 'react';

const bioStyle = {
    borderTop: '5px solid #EFEEEF',
    listStyleType: 'none',
    textAlign: 'left',
    paddingInlineStart: 0

}

const CardBio = props => {
    const { user } = props;
    return(
        <ul style={bioStyle}>
            <li><b>City:</b> {user.location.city}</li>
            <li><b>Phone:</b> {user.phone}</li>
            <li><b>Age:</b> {user.dob.age}</li>
        </ul>
    );
}

export default CardBio;