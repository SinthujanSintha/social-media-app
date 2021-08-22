import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import StoryReel from './StoryReel/StoryReel';
import db from "../../config/firebase"


const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        });
    },[]);
    console.log(posts);
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {posts.map((post) => {
                return <Post
                    key={post.id}
                    username={post.data.username}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    image={post.data.image} />
            })

            }

        </div>
    )
}

export default Feed;
