import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,  
        required: true,
        minLength: [8, "password must be 8 characters long"]         
    },
    avatar:{
        public_id: String,
        url: String,
    }

})

export const User= mongoose.model('User', userSchema)