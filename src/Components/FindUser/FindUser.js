import React from 'react';
import './FindUser.css';
import { getFromDb } from '../Utilities/fakeDb';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const FindUser = () => {
    const navigate = useNavigate();
    
    const handleFindSubmit = (e) => {        
        // this will prevent the reload when 'see user' is clicked      
        e.preventDefault(); 

        // this will activate the spinner
        document.querySelector('.loading-div').classList.add('active');
        const searchName = e.target.name.value;
        const existingUser = getFromDb(searchName);

        setTimeout(() => {
            if (existingUser) {
                document.querySelector('.loading-div').classList.remove('active');
                navigate(`/findSingleUser/${searchName}`);
            } else {
                // a popup or toast with error message will show if the database does not have the user
                toast.error('User Not Found', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                e.target.reset();
                document.querySelector('.loading-div').classList.remove('active');
            }
        }, 500);
        
    }
    return (
        <div className="find-user-div px-3 my-5">
            <form action="" className="find-user-div-form" onSubmit={handleFindSubmit}>
                <div className="name-input-div text-center">
                    <label htmlFor="name">Enter the name <span className="small-text">(Case sensitve)</span>  :</label>
                    <input type="text" name="name" id="" className="text-center"  required />
                </div>
                <div className="loading-div mt-4 mx-auto">
                    <Spinner animation="border" variant="primary" />
                </div>
                <button className="submit-button2 w-50" type="submit">See User</button>
            </form>
        </div>
    );
};

export default FindUser;