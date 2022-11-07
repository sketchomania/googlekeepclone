import Label from "../../../models/label.js";
import { transformLabel } from "../merge.js";

const labelQueries = {
  labels: async (arg, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    try {
      const labels = await Label.find({ creator: req.userId });
      return labels.map((label) => {
        return transformLabel(label);
      });
    } catch (err) {
      throw err;
    }
  },

  label: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    try {
      return await Label.findById(args.id);
    } catch (err) {
      throw err;
    }
  },
};

export default labelQueries;
