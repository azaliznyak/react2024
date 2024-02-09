import React from 'react';

const Post = ({post,getCurrentPost}) => {
    const{userId,id,title}=post
    return (
        <div>
            <div>{userId} - {id}</div>
            <div>{title}</div>
            <button onClick={()=>getCurrentPost(post)}>More</button>
            
        </div>
    );
};

export {Post};