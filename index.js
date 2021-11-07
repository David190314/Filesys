const fs = require('fs/promises');
const path = require('path');
const pathUser = path.resolve("users.json");

const getUsers = async() => {
    try{
        const array = await fs.readFile(pathUser, {encoding: "utf8"});
        return JSON.parse(array);
    }catch(error){
        return error
    }
};

const addUser = async (userObj) => {
    try{
        const array = await getUsers();
        array.push(userObj);
        await fs.writeFile(pathUser, JSON.stringify(array));
        return userObj;
    }catch(error){
        return error
    }
};

const clearUsers = async () => {
    try{
        await fs.writeFile(pathUser, JSON.stringify([]));
        return true;
    }catch(error){
        return true
    }
}

module.exports = {
    getUsers,
    addUser,
    clearUsers,
};
