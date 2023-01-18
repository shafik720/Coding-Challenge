import React, { useState } from 'react';
import { useParams } from 'react-router';
import { getFromDb } from '../Utilities/fakeDb';
import useCatagory from '../Utilities/Hooks/useCatagory';
import LoadingSpinner from '../Utilities/LoadingSpinner/LoadingSpinner';

const EditUser = () => {
    const{userName} = useParams();
    const[agree, setAgree] = useState(true);

    // getting user information from db
    const user = getFromDb(userName);
    // console.log(user.isAgreed)
    // setAgree(user.isAgreed);

    // setting up a loading screen before loading the sector catagory
    const [isLoading, setIsLoading] = useState(true);
    // this hook will get all the data for sector catagory
    const [catagory, setCatagory] = useCatagory(isLoading, setIsLoading);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    //  save button functionality    
    const handleSaveButton = (e) =>{
        e.preventDefault();
    }
    console.log(agree);
    return (
        <div>
            <h2>Edit User Here : {userName} </h2>

            {/*----------------- Create user form starts here -------------- */}
            <div className="form-div">
                <form action="" onSubmit={handleSaveButton}>
                    <div className="name-input-div">
                        <label htmlFor="name">Name :</label>
                        <input defaultValue={user.userName} type="text" name="name" id="" required />
                    </div>
                    <div className="sector-selection">
                        <label htmlFor="">Sector : </label>
    {/* ------------------ Sectors selection box will be shown here -------------- */}
                        <select className="form-select" aria-label="Default select example" name="sectors" >
                            <option value='0'>Select a Sector</option>
                            {
                                catagory.map(index => <option
                                    key={index.deta[0]}
                                    value={index.deta[0]}
                                    disabled={
                                        index.deta[0] === 1 ||
                                        index.deta[0] === 6 ||
                                        index.deta[0] === 13
                                        && true}
                                    className={
                                        index.deta[0] === 1 ||
                                        index.deta[0] === 6 ||
                                        index.deta[0] === 13
                                        ? 'strong' : ''}
                                >{index.deta[1]}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-check">
                        <input onClick={()=>setAgree(!agree)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={agree && true} onClick={()=>setAgree(!agree)} />
                        <label className="form-check-label fw-bold" htmlFor="flexCheckChecked"  >
                            Agree to terms
                        </label>
                    </div>
                    <button className="submit-button" type="submit">Save</button>
                </form>
            </div>
{/*- ---------------------- Create user form ends here ------------------------- */}
        </div>
    );
};

export default EditUser;