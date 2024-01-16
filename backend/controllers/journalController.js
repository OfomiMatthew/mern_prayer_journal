const journalModel = require("../models/journalModel");
const mongoose = require("mongoose");

//  create new journals
const createJournal = async function (req, res) {
  const { title, scripture, message, date, testament } = req.body;
  try {
    const journal = await journalModel.create({
      title,
      scripture,
      message,
      date,
      testament,
    });
    res.status(200).json(journal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//  get all journals
const getAllJournal = async function (req, res) {
  const journals = await journalModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(journals);
};

// get single journal
const getJournal = async function (req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such journal" });
  }
  const journal = await journalModel.findById(id);
  if (!journal) {
    return res.status(404).json({ message: "No journal found" });
  }
  res.status(200).json(journal);
};

// delete a journal
const deleteJournal = async function (req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "no journal found" });
  }
  const journal = await journalModel.findByIdAndDelete({ _id: id });

  if (!journal) {
    return res.status(404).json({ message: "no journal found" });
  }
  res.status(200).json(`${journal._id} with title of ${journal.title} has been deleted`);
};

// update a journal
const updateJournal = async function (req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "no journal found" });
  }
  const journal = await journalModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!journal) {
    return res.status(404).json({ message: "no journal found" });
  }
  res.status(200).json(`${journal._id} with title of "${journal.title}" has been updated`);
};

module.exports = {
  createJournal,
  getAllJournal,
  getJournal,
  deleteJournal,
  updateJournal,
};
