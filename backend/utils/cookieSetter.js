import jwt from "jsonwebtoken";

export const setCookie = (res, user, message, statusCode = 200) => {
  const token = jwt.sign({ id: user._id }, "djvndfjkvbd", {
    expiresIn: "7d",
  });

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    })
    .json({
      success: true,
      message,
    });
};
