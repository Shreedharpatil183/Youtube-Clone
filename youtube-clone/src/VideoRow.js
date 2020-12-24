import React from 'react'
import './VideoRow.css'
function VideoRow({views, subs, description, timestamp, Channel, title, image}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""></img>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">{Channel} .<span className="videoRow__subs">  <span className="videoRow__subsnumber">{subs}</span>  Subscribers</span> {views} Views . {timestamp}</p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
