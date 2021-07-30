import jwt from "jsonwebtoken";

const checkJwt = async (req, res, next) => {
  try {
    if (req.headers.authorization === "" || !req.headers.authorization) {
      req.user = null;
      return next();
    }

    let decodedJwt = jwt.decode(req.headers.authorization, {
      complete: true,
    });

    if (!decodedJwt)
      return res.status(401).json("Provided JWT token is Not a valid one");

    if (decodedJwt.header.alg !== "HS256")
      return res.status(403).json("Invalid Token");

    jwt.verify(
      req.headers.authorization,
      process.env.JWT_KEY,
      function (err, payload) {
        if (err) {
          return res.status(401).json("Failed to verify token");
        } else {
          req.user = decodedJwt.payload.data;
          next();
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
};

export default checkJwt;
