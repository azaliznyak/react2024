import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const{id,name,username,email,address:{street, suite, city, zipcode, geo:{lat, lng}}}=userDetails;
    const navigate=useNavigate()

    return (
        <div>
            <div>id:{id} - name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>address: street:{street}, suite:{suite}, city:{city}, zipcode:{zipcode} </div>
            <div>{lat} and {lng}</div>
            <button onClick={()=>navigate('posts')}>post of current user </button>

        </div>
    );
};

export {UserDetails};