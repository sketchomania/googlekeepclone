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

/*
// label: async(req,res) => {},

// res.status(200).json(label);

catch (error) {
  res.status(404).json({ message: error.message });
}
*/
