import Label from "../../../models/label.js";
import User from "../../../models/user.js";
import { transformLabel } from "../merge.js";

const labelMutations = {
  createLabel: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    const label = new Label({
      name: args.labelCreateInput.name,
      creator: req.userId,
    });
    let createdLabel;
    try {
      const result = await label.save();
      createdLabel = transformLabel(result);
      const labelCreator = await User.findById(req.userId);
      if (!labelCreator) {
        throw new Error("User not found.");
      }
      labelCreator.createdLabels.push(label);
      await labelCreator.save();

      return createdLabel;
    } catch (err) {
      throw err;
    }
  },

  deleteLabel: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    try {
      await Label.findByIdAndRemove({ _id: args.id });
      const labelCreator = await User.findById(req.userId);
      if (!labelCreator) {
        throw new Error("User not found");
      }
      labelCreator.createdLabels.pull(args.id);
      await labelCreator.save();

      return true;
    } catch (err) {
      return false;
    }
  },

  updateLabel: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    try {
      return await Label.findOneAndUpdate(
        { _id: args.id },
        {
          $set: {
            name: args.labelUpdateInput.name,
          },
        },
        {
          new: true,
        }
      );
    } catch (err) {
      throw err;
    }
  },
};

export default labelMutations;
