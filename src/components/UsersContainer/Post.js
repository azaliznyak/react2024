import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const{id,title}=post
    const navigate=useNavigate()
    return (
        <div>
            <div>title:{title}</div>

            <button onClick={()=>navigate(`/posts/${id}`)}>postDetails</button>
            
        </div>
    );
};

export {Post};