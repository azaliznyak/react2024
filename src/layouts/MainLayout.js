import React, {useState} from 'react';

import {Header} from "../components";
import {Outlet} from "react-router-dom";
import css from './Layout.module.css'

const MainLayout = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <div className={css[theme]} >
            <Header toggleTheme={toggleTheme} theme={theme} />
            <div >
            <Outlet/>

            </div>


        </div>
    );
};

export {MainLayout};