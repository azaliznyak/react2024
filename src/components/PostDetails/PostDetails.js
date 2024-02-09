import React from 'react';

const PostDetails = ({postDetails}) => {
    const {body}=postDetails
    return (
        <div>
            <p>{body}</p>
            
        </div>
    );
};

export {PostDetails};