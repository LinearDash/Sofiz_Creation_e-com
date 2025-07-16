import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "15d"
  })
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,// cookies will expire in 15 days
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",// if its in development cookies are allowed in localhost
  })
}