
const users = [
    {
        name: "User1",
        password: "password1"
    },
    {
        name: "User2",
        password: "password2"
    }
]

//-------------------------------- CHECK USER -----------------------------------------------
const checkUser = (user) => {

    const name = user.name;
    const password = user.password;

    const validName = users.find(user => user.name === name); 
    const validPassword = users.find(user => user.password === password); 

    if (!validName) {return "nameNotFound";}
    else if (!validPassword) {return "passwordNotFound";}
    else {return validName;}
}   
//---------------------------------------------------------------------------------------

//-------------------------------- CHECK USER -----------------------------------------------
const signUpUser = (user) => {

    if (typeof user === 'object') {

        const name = user.name;

        const userExist = users.find(user => user.name === name); 

        if (userExist) {
            return "nameExiste";
        } else {
            users.push(user);
            return user;
        };

    } else {
        return "userNotReceived";
    };  
}   
//---------------------------------------------------------------------------------------

module.exports = {
    checkUser,
    signUpUser
}