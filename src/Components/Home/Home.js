import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-div">
            <h2>Add Your Information Here : </h2>
            <hr />
            <div className="form-div">
                <form action="" >
                    <div className="name-input-div">
                        <label htmlFor="name">Name :</label>
                        <input type="text" name="name" id="" />
                    </div>
                    <div className="">
                        <label htmlFor="">Sectors</label>
                        <select name="pets" size="4">
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
                        <label className="form-check-label" for="flexCheckChecked">
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