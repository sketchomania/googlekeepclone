import Label from "../../../models/label.js";
import User from "../../../models/user.js";
import { transformLabel } from "../merge.js";

const labelMutations = {
  createLabel: async (args) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    const label = new Label({
      name: args.labelCreateInput.name,
      assignedNotes: ["61fa759e6d93584d02453450", "624e41c0c16f2d7a8c4a2f9a"],
      creator: "6242270cd2fdcd84ac8b8b05",
    });
    let createdLabel;
    try {
      const result = await label.save();
      createdLabel = transformLabel(result);
      const creator = await User.findById("6242270cd2fdcd84ac8b8b05");
      if (!creator) {
        throw new Error("User not found.");
      }
      creator.createdLabels.push(label);
      await creator.save();

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
      const creator = await User.findById("6242270cd2fdcd84ac8b8b05");
      if (!creator) {
        throw new Error("User not found");
      }
      creator.createdLabels.pull(args.id);
      await creator.save();

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
/*
  creator: "6242270cd2fdcd84ac8b8b05",
   this part is not showing as expected inside graphql query
*/
