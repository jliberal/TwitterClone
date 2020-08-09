import React, {useState, useEffect } from 'react'
import "../styles/Feed.css";
import TweetBox from '../components/TweetBox';
import Post from '../components/Post';
import db from '../firebase';

function Feed() {
    const [posts, setPosts] = useState([]); 
    
    useEffect(( ) =>{
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data(
                
            )))
        ))
    }, [] );

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            {/* Write Tweet */}
            <TweetBox />
            {/* Tweet feed */}
                {posts.map( post => (
                    <Post 
                        key={post.text}
                        displayName={post.displayName}
                        username={post.userName}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    /> 
                ))}
                {/* Post */}
                {/* Post */}
                {/* Post */}

        </div>
    )
}

export default Feed