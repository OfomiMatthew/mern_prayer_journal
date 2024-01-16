const express = require("express");
const router = express.Router();
const {
  createJournal,
  getAllJournal,
  getJournal,
  deleteJournal,
  updateJournal,
} = require("../controllers/journalController");

// add new journal
router.post("/", createJournal);

// get all journal
router.get("/", getAllJournal);

// get single journal
router.get("/:id", getJournal);

// delete journal
router.delete("/:id", deleteJournal);

// update journal
router.patch('/:id',updateJournal)

module.exports = router;
