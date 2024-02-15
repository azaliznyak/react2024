import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const{id, postId, name,email,body}=comment
    const navigator=useNavigate()


    return (
        <div>
            <div>id:{id}</div>
            <div>postId:{postId}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button onClick={()=>navigator('posts', {state:{postId}})}>Get post</button>

        </div>
    );
};

export {Comment};