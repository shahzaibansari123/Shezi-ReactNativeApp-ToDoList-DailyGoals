import {app} from './app.js';
import {config} from 'dotenv';
import {connectDatabase} from './config/database.js'
// import cors  from "cors";


config({
    path : './config/config.env'
})

// app.use(cors());
connectDatabase()


app.listen(process.env.PORT , ()=> console.log(`Server is running on http://localhost:${process.env.PORT}`))