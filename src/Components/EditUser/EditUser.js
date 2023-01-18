import React from 'react';
import { useParams } from 'react-router';
import { getFromDb } from '../Utilities/fakeDb';

const EditUser = () => {
    const{userName} = useParams();

    // getting user information from db
    const user = getFromDb(userName);
    
    return (
        <div>
            <h2>Edit User Here : {userName} </h2>
        </div>
    );
};

export default EditUser;