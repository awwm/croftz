const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function(req, res, next) {
  // Take token from header
  const token = req.header("jwt_token");

  // Check token
  if (!token) {
    return res.status(403).json({ msg: "authorization denied" });
  }

  // Verify token
  try {
    //giving the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
