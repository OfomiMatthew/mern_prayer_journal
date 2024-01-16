const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const journalSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    scripture: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },

    testament: {
      type: String,
      enum: ["OT", "NT"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BibleJournal", journalSchema);
