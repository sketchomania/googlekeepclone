import Label from "../../../models/label.js";

const labelMutations = {
  createLabel: async (args) => {
    try {
      const label = new Label({
        name: args.labelInput.name,
        // assignedNotes: args.labelInput.assignedNotes,
        assignedNotes: ["61fa759e6d93584d02453450", "61bc5b3779649242df8b61f5"],
        creator: "6242270cd2fdcd84ac8b8b05",
      });

      const result = await label.save();
      return { ...result._doc, _id: result.id };
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