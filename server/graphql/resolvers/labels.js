import Label from "../../models/label";

module.exports = {
  getLabels: async (req, res) => {
    try {
      const label = await Label.find();
      return;
      res.status(200).json(label);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};
