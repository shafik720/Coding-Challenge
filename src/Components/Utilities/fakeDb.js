// use session storage to manage cart data
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

    // if(dbUser.userName === userName){
    //     console.log('user already exists!');
    // }else{
    //     sessionStorage.setItem('db-usert', JSON.stringify(totalPacakge));
    // }
    
    // const quantity = shoppingCart[id];
    // if(quantity){
    //     const newQuantity = quantity + 1;
    //     shoppingCart[id] = newQuantity;
    // }
    // else{
    //     shoppingCart[id] = 1;
    // }
    
}



export {
    addToDb, 
}