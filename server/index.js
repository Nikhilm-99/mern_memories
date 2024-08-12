import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({limit : "30mb",extended:true}));
app.use(bodyParser.urlencoded({limit : "30mb",extended:true}));

const path = require("path");

app.use(express.static(path.join(__dirname, "build"))); // put this line of code in app.js

app.use(cors());
app.use('/posts',postRoutes);

const CONNECTION_URL="mongodb+srv://nikhilmanoj19:zjnbKS5iuRB8sZNh@cluster0.uyncedv.mongodb.net/";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on Port : ${PORT}`)))
   .catch((error)=>console.log(error.message)); 


//mongoose.set('useFindAndModify',false);