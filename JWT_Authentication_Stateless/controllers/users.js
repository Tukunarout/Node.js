const Users = require('../models/users')
const {setUser,getUser } = require("../service/auth")

async function handleUserSignup(req,res) {
    const {name,email,password} = req.body;
    await Users.create({
        name,email,password
    }) ;
    return res.redirect("login");

}
async  function handleUserLogin(req,res){
    const {email,password} = req.body;
    const user = await Users.findOne({email,password});
   if (!user)
    return res.render("login",{error: "Invalid Username or Password"});

  
  const token = setUser(user);
   //create a cookie
   res.cookie('uid',token)
    return res.redirect("/");
}



module.exports = {handleUserSignup,handleUserLogin}