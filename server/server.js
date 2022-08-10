import {app} from './app.js';
import {config} from 'dotenv';
import {connectDatabase} from './config/database.js'
// import cors  from "cors";
// import mongoose  from "mongoose";

// const PORT = process.env.PORT || 5000;
// const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.t5qza.mongodb.net/New?retryWrites=true&w=majority"
config({
    path : './config/config.env'
})

// app.use(cors());

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
    
//   )
//   .catch((error) => console.log(error.message));

connectDatabase()






app.listen(process.env.PORT , ()=> console.log(`Server is running on http://localhost:${process.env.PORT}`))