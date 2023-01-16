import React from 'react';
import './Home.css';

const Home = () => {
    const handleSaveButton = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const sector = e.target.sectors.value;
        console.log(name, sector);
    }
    return (
        <div className="home-div">
            <h2>Add Your Information Here : </h2>
            <hr />
            <div className="form-div">
                <form action=""  onSubmit={handleSaveButton}>
                    <div className="name-input-div">
                        <label htmlFor="name">Name :</label>
                        <input type="text" name="name" id="" />
                    </div>
                    <div className="sector-selection">
                        <label htmlFor="">Sector : </label>
                        <select name="sectors" size="4">
                            <optgroup label="4-legged pets">
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                            </optgroup>
                            <optgroup label="Flying pets">
                                <option value="parrot">Parrot</option>
                                <option value="macaw">Macaw</option>
                                <option value="albatross">Albatross</option>
                            </optgroup>
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