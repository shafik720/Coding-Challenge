import React from 'react';
import './FindUser.css';
import {getFromDb} from '../Utilities/fakeDb';
import { toast } from 'react-toastify';

const FindUser = () => {
    const handleFindSubmit = (e) =>{
        e.preventDefault();
        const searchName = e.target.name.value;
        const existingUser = getFromDb(searchName);
        if(existingUser){
            console.log('user found');
            toast("Wow so easy!");
        }else{
            console.log('user not found');
            toast.error('User Not Found', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }
    return (
        <div className="find-user-div px-3 my-5">
            <form action="" className="find-user-div-form" onSubmit={handleFindSubmit}>
                <div className="name-input-div text-center">
                    <label htmlFor="name">Enter the name :</label>
                    <input type="text" name="name" id="" className="text-center" required />
                </div>
                <button className="submit-button2 w-50" type="submit">See User</button>
            </form>
        </div>
    );
};

export default FindUser;