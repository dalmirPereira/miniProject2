const userServices = require('../services/userServices') //Import todos object that will receive the tasks

//--------------------------------CHECK USER-----------------------------------------------
const checkUser = (user) => {

   const checkUser = userServices.checkUser(user); 

   return checkUser;
}   
//---------------------------------------------------------------------------------------

//--------------------------------SIGN UP USER-----------------------------------------------
const signUpUser = (user) => {

   const signUpUser = userServices.signUpUser(user); 

   return signUpUser;
}   
//---------------------------------------------------------------------------------------

module.exports = {
    checkUser,
    signUpUser
}