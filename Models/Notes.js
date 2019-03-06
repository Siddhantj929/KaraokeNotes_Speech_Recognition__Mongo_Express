const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema(
   {
      title: {
         type: String,
         required: true
      },
      content: {
         type: String,
         required: true
      },
      author: {
         type: Schema.Types.ObjectId,
         ref: "Notes"
      }
   },
   {
      timestamps: true
   }
);

module.exports = mongoose.model("Notes", noteSchema);
