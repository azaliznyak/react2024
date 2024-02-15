import React from 'react';

import css from './Header.module.css'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
          <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            
        </div>
    );
};

export {Header};