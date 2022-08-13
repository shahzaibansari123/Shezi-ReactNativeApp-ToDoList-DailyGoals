import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "password must be 8 characters long"],
    select: false,
  },
  avatar: {
    public_id: String,
    url: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  tasks: [
    {
      title: String,
      description: String,
      completed: Boolean,
      createdAt: Date,
    },
  ],

  otp: Number,
  otp_expiry: Date,
});

userSchema.methods.getJWTToken = () => {
  const token = jwt.sign({ _id: user_id }, process.env.JWT_SECRET_KEY, {});
};

export const User = mongoose.model("User", userSchema);
