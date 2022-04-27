import Label from "../../../models/label.js";
import User from "../../../models/user.js";

const labelMutations = {
  createLabel: async (args) => {
    const label = new Label({
      name: args.labelCreateInput.name,
      // assignedNotes: args.labelCreateInput.assignedNotes,
      assignedNotes: ["61fa759e6d93584d02453450", "61bc5b3779649242df8b61f5"],
      creator: "6242270cd2fdcd84ac8b8b05",
    });
    let createdLabel;
    try {
      const result = await label.save();
      createdLabel = { ...result._doc, _id: result.id };
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

  deleteLabel: async (args) => {
    try {
      await Label.findByIdAndRemove({ _id: args.id });
      return true;
    } catch (err) {
      return false;
    }
  },

  updateLabel: async (args) => {
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
