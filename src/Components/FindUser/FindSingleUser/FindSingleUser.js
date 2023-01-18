import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFromDb } from '../../Utilities/fakeDb';
import useCatagory from '../../Utilities/Hooks/useCatagory';
import './FindSingleUser.css';

const FindSingleUser = () => {
    const { userName } = useParams();

    const user = getFromDb(userName);

    // setting up a loading screen before loading the sector catagory
    const [isLoading, setIsLoading] = useState(true);
    // this hook will get all the data for sector catagory
    const [catagory, setCatagory] = useCatagory(isLoading, setIsLoading);
    // console.log(catagory);
    catagory.map(index => console.log(index.deta[1]))
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h5>User Details : </h5>
            <hr />
            <div className="user-details-div">
                <table className='table'>
                    <tbody>
                        <tr   className=''>
                            <td className='fw-bold text-start'>Name :</td>
                            <td className='strong-text1 text-end'>{user.userName}</td>
                        </tr>
                        
                        <tr   className=''>
                            <td className='fw-bold text-start'>Sector :</td>
                            <td className='strong-text1 text-end'>{catagory.map(index => <p>{index.deta[0] == user.catagoryId && index.deta[1]}</p>)}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default FindSingleUser;