import express from "express";

import { getLabels, createLabel, updateLabel } from "../controllers/labels.js";

const router = express.Router();

router.get("/", getLabels);
router.post("/", createLabel);
router.patch("/:id", updateLabel);
// router.delete("/:id", deleteLabel);

export default router;
