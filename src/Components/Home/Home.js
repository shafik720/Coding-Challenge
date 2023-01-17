import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const handleSaveButton = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const sector = e.target.sectors.value;
        if(sector == 0){
            return;
        }
        console.log(name, sector);
    }

    const [catagory, setCatagory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setCatagory(data);
                setIsLoading(false);
            });
    }, [isLoading]);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home-div">
            <h2>Add Your Information Here : </h2>
            <hr />
            <div className="form-div">
                <form action="" onSubmit={handleSaveButton}>
                    <div className="name-input-div">
                        <label htmlFor="name">Name :</label>
                        <input type="text" name="name" id="" />
                    </div>
                    <div className="sector-selection">
                        <label htmlFor="">Sector : </label>
                        {/* <select name="sectors" >
                            
                            {
                                catagory.map(index => <option
                                    key={index.deta[0]}
                                    value={index.deta[0]}
                                    disabled={index.deta[0] == 1 && true}
                                    className={
                                        index.deta[0] === 1 ||
                                            index.deta[0] === 6 ||
                                            index.deta[0] === 13
                                            ? 'strong' : ''}
                                >{index.deta[1]}</option>)
                            }
                        </select> */}
    {/* ------------------ Sectors selection box will be shown here -------------- */}
                        <select className="form-select" aria-label="Default select example" name="sectors">
                            <option value='0'>Open this select menu</option>
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
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label fw-bold" htmlFor="flexCheckChecked">
                            Agree to terms
                        </label>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default Home;