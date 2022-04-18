import Label from "../../../models/label.js";

const labelQueries = {
  labels: async (req, res) => {
    try {
      const labels = await Label.find();
      return labels.map((label) => {
        return label;
      });
    } catch (err) {
      throw err;
    }
  },

  label: async (args) => {
    try {
      return await Label.findById(args.id);
    } catch (err) {
      throw err;
    }
  },
};

export default labelQueries;