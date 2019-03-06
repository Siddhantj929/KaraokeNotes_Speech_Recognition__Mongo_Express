const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
      name: {
         type: String,
         required: true
      },
      password: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true
      },
      createdNotes: [
         {
            type: Schema.Types.ObjectId,
            ref: "Notes"
         }
      ],
      savedNotes: [
         {
            type: Schema.Types.ObjectId,
            ref: "Notes"
         }
      ],
      friends: [
         {
            type: Schema.Types.ObjectId,
            ref: "Users"
         }
      ],
      points: {
         type: Number,
         required: true,
         default: 140
      }
   },
   {
      timestamps: true
   }
);

module.exports = mongoose.model("Users", userSchema);
