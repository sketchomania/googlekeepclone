import bcrypt from "bcryptjs";
// import { Jwt } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import User from "../../../models/user";

const authQueries = {
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("🤨 User does not exist!");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("😑 Entered password is incorrect!");
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "someSuperSecretKey",
      {
        expiresIn: "1h",
      }
    );
    return { userId: user.id, token: token, tokenExpirationTime: 1 };
  },
};

export default authQueries;