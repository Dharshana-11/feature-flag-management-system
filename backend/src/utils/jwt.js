import jwt from "jsonwebtoken";

// Generates a JWT token with secret key
export const generateJWTToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: "14d",
  });
};
