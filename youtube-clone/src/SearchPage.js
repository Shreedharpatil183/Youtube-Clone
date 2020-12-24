import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon></TuneOutlinedIcon>
            <h2>FILTER</h2>
            </div>
        <hr></hr>

        <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJxEXOe4UY8qkSdtlYWEqmQpT6Bj3ahzSljK5MAi=s88-c-k-c0x00ffffff-no-rj"
        Channel="Nilesh Technology"
        verified
        subs="500k"
        noOfVideos={350}
        description="All programming Tutorials"
        ></ChannelRow>
        <hr></hr>

        <VideoRow
        views="5K"
        subs="500K"
        description="Learn WebDevelopment"
        timestamp="2 days ago"
        Channel="Nilesh Technology"
        title="Laravel framework"
        image="https://i.ytimg.com/an_webp/xn3k9l8KOk0/mqdefault_6s.webp?du=3000&sqp=CL3Wk_0F&rs=AOn4CLBDjEv0T4mlBWTtHN1vFmJOLHNiPQ"
        ></VideoRow>

        
        <VideoRow
        views="3K"
        subs="500K"
        description="Learn WebDevelopment"
        timestamp="5 days ago"
        Channel="Nilesh Technology"
        title="Android Development"
        image="https://i.ytimg.com/an_webp/fl6IOqZAzuY/mqdefault_6s.webp?du=3000&sqp=CPCLlP0F&rs=AOn4CLDVzftQPVAuyplrHg_kdH94ch6AoQ"
        ></VideoRow>

        
        <VideoRow
        views="2K"
        subs="500K"
        description="Learn WebDevelopment"
        timestamp="3 days ago"
        Channel="Nilesh Technology"
        title="Php CMS Application"
        image="https://i.ytimg.com/vi/3XyFigC070A/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCVQ7II4n2iAALELD5LQfgTwrL5Gg"
        ></VideoRow>
        </div>

        
    )
}

export default SearchPage
