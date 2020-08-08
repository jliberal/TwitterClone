import React from 'react';
import '../styles/TweetBox.css';
import {Avatar, Button} from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar alt="Johnpiras" src="../images/avatarjohnjpg.jpg" />
                    <input placeholder="¿En que estás pensando?" type="text" />
                </div>
                <input
                    className="tweetBox_imageInput" 
                    placeholder="Insertar URL de imagen" 
                    type="text" />
            </form>
            <Button className="tweetBox_tweetButton">Tweet</Button>    
        </div>
    )
}

export default TweetBox
