import mongoose from "mongoose";

export const connectDatabase = async () => {
//   try {
//     const { connection } = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB connected: ${connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }


mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => console.log("connected"))
  .catch(() => console.log("Database connection failed!"));

};

  // mongoose
  // .connect(process.env.MONGO_URI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })

  // // const {connection} = mongoose.connect(process.env.MONGO_URI);

  // console.log("MongoDB Connected")

  


