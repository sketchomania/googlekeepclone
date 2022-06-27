import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../../../models/user.js";

const authMutations = {
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({
        email: args.userCreateInput.email,
      });
      if (existingUser) {
        throw new Error("😑User with this email already exist!");
      }
      const hashedPassword = await bcrypt.hash(
        args.userCreateInput.password,
        12
      );

      const user = new User({
        email: args.userCreateInput.email,
        password: hashedPassword,
      });
      const result = await user.save();

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return { user: { ...result._doc }, token: token, tokenExpirationTime: 1 };
    } catch (err) {
      throw err;
    }
  },
};

export default authMutations;
