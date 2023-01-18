import { useEffect, useState } from "react";


function useCatagory(isLoading, setIsLoading){
        // get all the data for Sector catagory
        const [catagory, setCatagory] = useState([]);
    
        useEffect(() => {
            fetch('data.json')
                .then(res => res.json())
                .then(data => {
                    setCatagory(data);
                    setIsLoading(false);
                });
        }, [isLoading]);
        return [catagory, setCatagory];
}

export default useCatagory;