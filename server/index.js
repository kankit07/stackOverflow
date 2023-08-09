import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import mongoose from "mongoose";



dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/',(req, res) => {
//     res.send("This is a stack overflow clone API")
// })

app.use("/user", userRoutes);
app.use('/questions', questionRoutes)
app.use('/answer',answerRoutes)


const PORT = process.env.PORT || 5001;

const conn = process.env.URL

mongoose.connect(conn,{useNewUrlParser: true, useUnifiedTopology:true})
 .then(()=>app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)}))
 .catch((err)=>console.log(err.message))




