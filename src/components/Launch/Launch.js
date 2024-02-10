import React from 'react';

const Launch = ({launch}) => {
    const{mission_name, launch_year, links:{mission_patch_small}}=launch
    return (
        <div>
            <div>Name:{mission_name}- Year:{launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>

        </div>
    );
};

export {Launch};