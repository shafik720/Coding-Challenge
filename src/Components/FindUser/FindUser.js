import React from 'react';
import './FindUser.css';

const FindUser = () => {
    return (
        <div className="find-user-div px-3 my-5">
            <div className="name-input-div text-center">
                <label htmlFor="name">Enter the name :</label>
                <input type="text" name="name" id="" className="text-center" />
            </div>
            <button className="submit-button2 w-50" type="submit">See User</button>
        </div>
    );
};

export default FindUser;