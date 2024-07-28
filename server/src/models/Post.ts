import mongoose, { Schema } from "mongoose";

type TPost = {
  userId: string;
  desc: string;
  likes: [];
  comments: [];
};

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    desc: {
      type: String,
      required: [true, "Please provide post description!"],
    },
    likes: [],
    comments: [],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<TPost>("Post", PostSchema);
