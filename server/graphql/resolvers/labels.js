//  This file is not being used goto label/
import Label from "../../models/label.js";

const labelResolver = {
  labels: async (req, res) => {
    try {
      const labels = await Label.find();
      return labels.map((label) => {
        return label;
      });
      // res.status(200).json(label);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default labelResolver;
