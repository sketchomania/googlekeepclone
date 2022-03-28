import Label from "../../models/label";

export const labelResolver = {
  getLabels: async (req, res) => {
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
