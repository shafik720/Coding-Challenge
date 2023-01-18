import React, { useState } from 'react';
import { useParams } from 'react-router';
import { getFromDb } from '../Utilities/fakeDb';
import useCatagory from '../Utilities/Hooks/useCatagory';
import LoadingSpinner from '../Utilities/LoadingSpinner/LoadingSpinner';

const EditUser = () => {
    const{userName} = useParams();

    // getting user information from db
    const user = getFromDb(userName);

        // setting up a loading screen before loading the sector catagory
        const [isLoading, setIsLoading] = useState(true);
        // this hook will get all the data for sector catagory
        const [catagory, setCatagory] = useCatagory(isLoading, setIsLoading);
    
        if (isLoading) {
            return <LoadingSpinner></LoadingSpinner>;
        }
    return (
        <div>
            <h2>Edit User Here : {userName} </h2>
        </div>
    );
};

export default EditUser;