import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const handleSaveButton = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const sector = e.target.sectors.value;
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
                console.log(catagory);
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
                        <select name="sectors" >
    {/* ------------------ Sectors selection box will be shown here -------------- */}
                            {
                                catagory.map(index=><option 
                                    key= {index.deta[0]}
                                    value={index.deta[0]} 
                                    disabled ={index.deta[0]==3 && true}
                                    className={index.deta[0]==3 ?'strong' : ''}
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