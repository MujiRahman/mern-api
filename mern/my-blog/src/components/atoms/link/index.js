import React from 'react';
import './link.scss';

const Link = ({title, onclick}) => {
    return (
        <p className="link" onclick={onclick}>{title}</p>
        
    )
}

export default Link
