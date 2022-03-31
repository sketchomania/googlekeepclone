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
      //   const hashedPassword = await bcrypt.hash(args.userCreateInput.password, 12);

      const user = new User({
        email: args.userCreateInput.email,
        password: args.userCreateInput.password,
      });

      const result = await user.save();
      // check for password: null
      // for future send encrypt password feature
      return { ...result._doc, _id: result.id };
      // here we explicitly modifying the return by passing null in password field
      //   return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
};

export default authMutations;
