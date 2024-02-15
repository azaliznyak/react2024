import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {Post} from "./Post";
import {postsService} from "../../services/postsService";

const Posts = () => {
    const [post,setPost]=useState(null)
    const {state:{postId}}=useLocation();

    useEffect(()=>{
        postsService.getById(postId).then(({data})=>setPost(data))
    },[postId])
    return (
        <div>
            {post&&<Post key={post.id} post={post}/>}

        </div>
    );
};

export {Posts};