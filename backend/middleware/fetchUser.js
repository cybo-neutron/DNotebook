const jwt = require("jsonwebtoken");

function fetchUser(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    res.status(401).json({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(authToken, process.env.JWT_SECRET);
    console.log(data);
    req.user = data.user;
    next();
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }
}

module.exports = fetchUser;
