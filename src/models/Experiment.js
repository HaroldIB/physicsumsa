import { Schema, model } from "mongoose";

const experimentSchema = new Schema(
  {
    times: {
      type: [Number],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("experiment", experimentSchema);
