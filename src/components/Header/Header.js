import React from 'react';

import css from './Header.module.css'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>

            {/*<a href="/users">Users</a>*/}
            {/*<a href="/posts">Posts</a>*/}
      </div>
    );
};

export {Header};