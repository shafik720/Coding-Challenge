

// this function will add user to database
const addToDb = (name, id, agree) =>{  
    let dbUser = JSON.parse(sessionStorage.getItem('db-user') || '[]');

    // add data to storage
    const catagoryId = id;
    const userName = name;
    const isAgreed = agree;   

    const totalPacakge = { userName, catagoryId, isAgreed};

    const existingUser = dbUser.find(user=> user.userName === userName);
    if(!existingUser){
        dbUser.push(totalPacakge);
        sessionStorage.setItem('db-user', JSON.stringify(dbUser));
    }else{
        console.log('user already exists !');
    }
}

// this function will get user from database
function getFromDb(name){
    let dbUser = JSON.parse(sessionStorage.getItem('db-user') || '[]');

    const userName = name;
    const existingUser = dbUser.find(user=> user.userName === userName);
    // if(!existingUser){
    //     console.log('user not found');
    // }else{
    //     return dbUser;
    // }
    return existingUser;
}


export {
    addToDb, 
    getFromDb
}