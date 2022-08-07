import mongoose from "mongoose";

export const connectDatabase =  () => {

    mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    // const {connection} = mongoose.connect(process.env.MONGO_URI);

    // console.log(`MongoDB Connected :  ${connection.host}`)
   
}

