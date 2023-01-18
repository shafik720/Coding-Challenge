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

// edit a user
const editToDb = (name, id, agree) => {
    let dbUser = JSON.parse(sessionStorage.getItem('db-user') || '[]');

    // add data to storage
    const catagoryId = id;
    const userName = name;
    const isAgreed = agree;

    const totalPacakge = { userName, catagoryId, isAgreed };
    console.log(dbUser);
    const existingUserName = dbUser.find(user => user.userName === userName);
    const existingSector = dbUser.find(user => user.catagoryId === catagoryId);
    if (existingUserName && existingSector) {        
        toast.error("You have not changed anything", {
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
        // dbUser.push(totalPacakge);
        // sessionStorage.setItem('db-user', JSON.stringify(dbUser));
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