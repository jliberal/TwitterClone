import React from 'react';
import '../styles/Post.css';
import {Avatar} from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post() {
    return (
        /*  
            DisplayName
            userName
            verified
            text
            image
            avatar
        */
        <div className="post">
            <div className="post_avatar">
                <Avatar alt="Johnpiras" src="../images/avatarjohnjpg.jpg" />    
            </div> 
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            Johnplex UFP 
                            <span className="post_headerSpecial"> 
                                <VerifiedUserIcon className="post_badge" />
                                @jliberal
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>Aqui va el primer tweet de prueba para el frontend</p>
                    </div>
                </div>
                <img 
                    src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"
                    alt="Winning"
                ></img>
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div> 
        </div>
    )
}

export default Post
