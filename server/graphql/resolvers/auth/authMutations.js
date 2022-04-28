import bcrypt from "bcryptjs"
import User from "../../../models/user.js";

const authMutations = {
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({
        email: args.userCreateInput.email,
      });
      if (existingUser) {
        throw new Error("User exists already.");
      }
      const hashedPassword = await bcrypt.hash(args.userCreateInput.password, 12);

      const user = new User({
        email: args.userCreateInput.email,
        password: hashedPassword,
      });

      const result = await user.save();

      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
};

export default authMutations;
