import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      const token = req.headers.authorization.split(" ")[1];

      let decodedData;

      decodedData = jwt.verify(token, process.env.SECRET);

      req.userId = decodedData?.id;
      req.roles = decodedData?.roles;
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    console.log(error);
  }
};

export default auth;
