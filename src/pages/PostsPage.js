import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";

import {Post} from "../components/UsersContainer/Post";
import {postService} from "../services/postService";

const PostsPage = () => {
    const {id}=useParams()
    const [post, setPost]=useState(null);
    useEffect(()=>{
        postService.getById(id).then(({data})=>setPost(data))
    },[id])
    return (
        <div>
            {post &&<Post post={post}/>}
            <hr/>



        </div>
    );
};

export {PostsPage};