const jwt = require("jsonwebtoken");

//secret key for jwt  
const secret = "tukuna#123";

function setUser(user) {
  //Taking a payload for jwt and giving a token
  return jwt.sign({
    _id: user._id,
    email: user.email,
  }, secret);
}

function getUser(token) {
  if (!token) return null;
  try {
    //verify the token using same secret key
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
  
}

module.exports = { setUser, getUser };
