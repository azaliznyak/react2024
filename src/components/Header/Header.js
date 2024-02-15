import React from 'react';

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <a href="/users">Users</a>
            <a href="/posts">Posts</a>
            
        </div>
    );
};

export {Header};