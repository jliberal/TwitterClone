import React, {useState } from 'react';
import '../styles/TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import db from '../firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        
        db.collection("posts").add({
            displayName: 'Johnplex United 4P',
            userName: 'jliberal',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'avatarjohnjpg.jpg'
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="../images/avatarjohnjpg.jpg" />
                    <input 
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="¿En que estás pensando?" 
                        type="text" />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox_imageInput" 
                    placeholder="Insertar URL de imagen" 
                    type="text" />
            </form>
            <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>    
        </div>
    )
}

export default TweetBox
