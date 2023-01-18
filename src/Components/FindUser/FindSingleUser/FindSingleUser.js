import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFromDb } from '../../Utilities/fakeDb';
import useCatagory from '../../Utilities/Hooks/useCatagory';

const FindSingleUser = () => {
    const{userName} = useParams();
    
    const user = getFromDb(userName);
    // console.log(user);

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
            <h5>User Details : </h5>
            <hr />
            <div className="user-details-div">
                <h2>Name : {user.userName} </h2>
                <h2>Sectors : {user.sectors} </h2>
            </div>
        </div>
    );
};

export default FindSingleUser;