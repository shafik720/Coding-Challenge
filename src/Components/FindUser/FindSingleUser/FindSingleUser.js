import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFromDb } from '../../Utilities/fakeDb';

const FindSingleUser = () => {
    const{userName} = useParams();
    
    const user = getFromDb(userName);
    console.log(user);

    // const[user, setUser] = useState([]);
    // const[loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     const user = getFromDb(userName);
    //     console.log(user);
    //     if(user){
    //         setLoading(false);
    //         setUser(user)
    //     }
    // },[loading]);

    // if(loading){
    //     return <div>...loading</div>
    // }
    return (
        <div>
            <h2>User Details here : {user.userName} </h2>
        </div>
    );
};

export default FindSingleUser;