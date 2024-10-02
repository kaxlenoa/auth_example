import EmailProvider from "next-auth/providers/nodemailer";

export const authConfig = {
  loginUrl: "/login",
  normalUserCallbackUrl: "/dashboard",
  adminUserCallbackUrl: "/admin/dashboard",
};
