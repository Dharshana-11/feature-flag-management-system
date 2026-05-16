import { generateJWTToken } from "../utils/jwt.js";
import ROLES from "../const/roles.js";

// Validates super admin credentials
export const loginSuperAdminService = ({ email, password }) => {
  if (
    email != process.env.SUPER_ADMIN_EMAIL ||
    password != process.env.SUPER_ADMIN_PASSWORD
  ) {
    throw new Error("Invalid username or password");
  }

  // If vaild, create a jwt token for user
  return generateJWTToken({ role: ROLES.SUPER_ADMIN, email });
};
