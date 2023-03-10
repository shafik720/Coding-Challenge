import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addToDb } from '../Utilities/fakeDb';
import useCatagory from '../Utilities/Hooks/useCatagory';
import LoadingSpinner from '../Utilities/LoadingSpinner/LoadingSpinner';
import './Home.css';

const Home = () => {
    // this will toggle for user agreement check box
    const[agree, setAgree] = useState(false);

    // when user clicked save button this function will be triggered 
    const handleSaveButton = (e) => {
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
            e.target.reset();
            setAgree(false);
            addToDb(name, sector, true);
        }        
    }

    // setting up a loading screen before loading the sector catagory
    const [isLoading, setIsLoading] = useState(true);
    // this hook will get all the data for sector catagory
    const [catagory, setCatagory] = useCatagory(isLoading, setIsLoading);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <div className="home-div">
            <h2>Please enter your name and pick the Sectors you are currently involved in : </h2>
            <hr />
    {/*----------------- Create user form starts here -------------- */}
            <div className="form-div">
                <form action="" onSubmit={handleSaveButton}>
                    <div className="name-input-div">
                        <label htmlFor="name">Name :</label>
                        <input type="text" name="name" id="" required />
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
                                        index.deta[0] === 12 ||
                                        index.deta[0] === 97 ||
                                        index.deta[0] === 11 ||
                                        index.deta[0] === 9 ||
                                        index.deta[0] === 559 ||
                                        index.deta[0] === 542 ||
                                        index.deta[0] === 5 ||
                                        index.deta[0] === 7 ||
                                        index.deta[0] === 8 ||
                                        index.deta[0] === 3 ||
                                        index.deta[0] === 2 ||
                                        index.deta[0] === 28 ||
                                        index.deta[0] === 21 ||
                                        index.deta[0] === 13
                                        && true}
                                        // making subcatagory bold 
                                    className={
                                        index.deta[0] === 1 ||
                                        index.deta[0] === 6 ||
                                        index.deta[0] === 12 ||
                                        index.deta[0] === 97 ||
                                        index.deta[0] === 11 ||
                                        index.deta[0] === 9 ||
                                        index.deta[0] === 559 ||
                                        index.deta[0] === 542 ||
                                        index.deta[0] === 5 ||
                                        index.deta[0] === 7 ||
                                        index.deta[0] === 8 ||
                                        index.deta[0] === 3 ||
                                        index.deta[0] === 2 ||
                                        index.deta[0] === 28 ||
                                        index.deta[0] === 21 ||
                                        index.deta[0] === 13
                                        ? 'strong' : ''}
                                >{index.deta[1]}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-check">
                        <input onClick={()=>setAgree(!agree)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label fw-bold" htmlFor="flexCheckChecked">
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

export default Home;