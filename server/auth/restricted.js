const jwt = require('jsonwebtoken');

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = "this is the secret"; //pull this into it's own file

  if(token){
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        return res
          .status(401)
          .json({ message: 'Token was not decoded', err });
      } 
      next();
    });

  } 
  else{
    res.send({message: "Error in retrieving token."})
  }
}

module.exports = restricted;