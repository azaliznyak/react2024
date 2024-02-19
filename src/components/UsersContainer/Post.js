import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const{title}=post
    const navigate=useNavigate()
    return (
        <div>
            <div>title:{title}</div>

            <button onClick={()=>navigate('postDetails')}>postDetails</button>
            
        </div>
    );
};

export {Post};