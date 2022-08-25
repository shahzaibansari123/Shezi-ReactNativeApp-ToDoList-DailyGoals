import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt  from 'bcrypt';

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

  verified: {
    type: Boolean,
    default: false,
  },

  otp: Number,
  otp_expiry: Date,
});

userSchema.pre("save", async function(next){
  if (!this.isModified("password")) return next()

  const salt= await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password, salt);
  next();
})

userSchema.methods.getJWTToken = () => {
  return jwt.sign({ _id: user_id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.COOKIE_JWT_EXPIRES_AT *24 * 60 * 60 * 1000,
  });
};

userSchema.methods.comparePassword=  async(password)=>{
  return bcrypt.compare(password, this.password);

}
export const User = mongoose.model("User", userSchema);
