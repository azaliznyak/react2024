import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../services/postService";
import {PostDetails} from "../components/UsersContainer/PostDetails";

const PostDetailsPage = () => {
    const {id}=useParams()
    const [postDetails, setPostDetails]=useState(null)

    useEffect(()=>{
        postService.getById(id).then(({data})=>setPostDetails(data))
    },[id])
    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}

        </div>
    );
};

export {PostDetailsPage};