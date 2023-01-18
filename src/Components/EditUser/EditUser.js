import React, { useState } from 'react';
import './EditUser.css';
import { useParams } from 'react-router';
import { getFromDb , editToDb } from '../Utilities/fakeDb';
import useCatagory from '../Utilities/Hooks/useCatagory';
import LoadingSpinner from '../Utilities/LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';

const EditUser = () => {
    const{userName} = useParams();
    const[agree, setAgree] = useState(true);
    

    // getting user information from db
    const user = getFromDb(userName);

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

        const name = e.target.name.value;
        const sector = e.target.sectors.value;
        if(sector == 0){
            toast.warning('Sector is not selected', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }else if(!agree){
            toast.warning("You haven't agreed to terms", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }else{
            editToDb(name, sector, true, userName);
            // setAgree(false);
        }        
    }
    return ( !user ? <div>User not found</div> :  <div className="edit-div pb-3">
    <p>Edit User Here :  </p>
    <hr width="50%" className="mx-auto" />

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
                                selected = {index.deta[0]==user.catagoryId && true}
                        >{index.deta[1]}</option>)
                    }
                </select>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={agree && true} onChange={()=>setAgree(!agree)} />
                <label className="form-check-label fw-bold" htmlFor="flexCheckChecked"  >
                    Agree to terms
                </label>
            </div>
            <button className="submit-button" type="submit">Edit & Save</button>
        </form>
    </div>
{/*- ---------------------- Create user form ends here ------------------------- */}
</div>
       
    );
};

export default EditUser;