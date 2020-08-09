import React from 'react'
import "../styles/Feed.css";
import TweetBox from '../components/TweetBox';
import Post from '../components/Post.js';

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            {/* Write Tweet */}
            <TweetBox />
            {/* Tweet feed */}
                <Post /> 
                <Post /> 
                <Post />  
                {/* Post */}
                {/* Post */}
                {/* Post */}

        </div>
    )
}

export default Feed