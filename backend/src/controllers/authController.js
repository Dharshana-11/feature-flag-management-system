import { loginSuperAdminService } from "../services/authService.js";

export const loginSuperAdmin = (req, res) => {
  const { email, password } = req.body;

  try {
    const token = loginSuperAdminService({ email, password });

    return res.status(200).json({
      success: true,
      message: "JWT token created, super admin login successful :)",
      token,
    });
  } catch (error) {
    //If username or password invalid, return Unauthorized Error (401)
    if (error.message === "Invalid username or password") {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }

    // Internal server error
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
