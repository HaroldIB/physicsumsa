import { Schema, model } from "mongoose";

const stateSchema = new Schema(
  {
    state: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("state", stateSchema);
