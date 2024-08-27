const { getUser} =require("../service/auth")

async function restrictToLoggedinUserOnly(req,res,next){
    const userUid= req.cookies.uid


    if(!userUid) return res.redirect('/login',{error: "Invalid Username or Password"});

    const user = getUser(userUid);

    if(!user) return res.redirect('/login',{error: "Invalid Username or Password"})
    req.user = user;
    next();

}

async function checkAuth(req,res,next){
    const userUid= req.cookies.uid

    const user = getUser(userUid);

    req.user = user;
    next();
}

module.exports = {restrictToLoggedinUserOnly,checkAuth};