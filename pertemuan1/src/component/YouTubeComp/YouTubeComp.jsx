import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube">
            <div className="img-thumb">
                <img src="" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'title',
    desc: 'desc'
}

export default YouTubeComp;