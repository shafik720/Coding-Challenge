import { useNavigate } from "react-router";
import { toast } from "react-toastify";


// this function will add user to database
const addToDb = (name, id, agree) => {
    let dbUser = JSON.parse(sessionStorage.getItem('db-user') || '[]');

    // add data to storage
    const catagoryId = id;
    const userName = name;
    const isAgreed = agree;

    const totalPacakge = { userName, catagoryId, isAgreed };

    const existingUser = dbUser.find(user => user.userName === userName);
    if (!existingUser) {
        dbUser.push(totalPacakge);
        sessionStorage.setItem('db-user', JSON.stringify(dbUser));
        toast.success("User Created", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        toast.error("User already Exist!", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        return { existed: true };
    }
}

//---------------------- edit a user

const editToDb = (name, id, agree, previousUserName, previousCatagoryId) => {
    let dbUser = JSON.parse(sessionStorage.getItem('db-user') || '[]');

    // add data to storage
    const catagoryId = id;
    const userName = name;
    const isAgreed = agree;

    
    const existingUserName = dbUser.find(user => user.userName === userName);
    console.log('Previous Catagory Id : ', previousCatagoryId);
    console.log('New Catagory Id : ', catagoryId);
    if (existingUserName) {        
        toast.error(" Name already Exists !", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    } else if (previousCatagoryId==catagoryId && existingUserName) {        
        toast.error("You have not changed anything or the Name already Exists !", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    } else {
        
        for(let i=0; i<dbUser.length;i++){
            // console.log(dbUser[i].userName==previousUserName);
            if(dbUser[i].userName==previousUserName){
                console.log(i);
                dbUser.splice(i,1);
            }
        }
        const totalPacakge = { userName, catagoryId, isAgreed };
        dbUser.push(totalPacakge);
        sessionStorage.setItem('db-user', JSON.stringify(dbUser));
        window.location.href = `/findSingleUser/${userName}`;

        toast.success("User Updated Successfully", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}

// this function will get user from database
function getFromDb(name) {
    let dbUser = JSON.parse(sessionStorage.getItem('db-user') || '[]');

    const userName = name;
    const existingUser = dbUser.find(user => user.userName === userName);
    // if(!existingUser){
    //     console.log('user not found');
    // }else{
    //     return dbUser;
    // }
    return existingUser;
}


export {
    addToDb,
    getFromDb,
    editToDb
}