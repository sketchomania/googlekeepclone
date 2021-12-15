import express from "express";

import { getNotes, createNote } from "../controllers/notes.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);

export default router;
