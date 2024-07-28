import mongoose from "mongoose";

type TUser = {
  _id: string;
  username: string;
  email: string;
  password: string;
};

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: [true, "Please provide your name!"],
    },
    email: {
      unique: true,
      type: "string",
      required: [true, "Please provide your email!"],
    },
    password: {
      type: "string",
      required: [true, "Please provide your password!"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<TUser>("User", UserSchema);
