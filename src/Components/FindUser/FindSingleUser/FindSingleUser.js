import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFromDb } from '../../Utilities/fakeDb';
import useCatagory from '../../Utilities/Hooks/useCatagory';

const FindSingleUser = () => {
    const{userName} = useParams();
    
    const user = getFromDb(userName);

    // setting up a loading screen before loading the sector catagory
    const [isLoading, setIsLoading] = useState(true);
    // this hook will get all the data for sector catagory
    const [catagory, setCatagory] = useCatagory(isLoading, setIsLoading);
    console.log(catagory);
    if (isLoading) {
        return <div>Loading...</div>;
    }

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