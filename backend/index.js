
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import './Models/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import AuthRouter from './Routers/AuthRouter.js'
// import ProductRouter from './Routers.js/ProductRouter.js'

const app = express();

// middle ware
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter )
// app.use('/products',ProductRouter)

// ****************************App executing******************************
const Port = process.env.PORT;
app.get('/', (req,res)=>{
  res.send("settttttttUpppppppp")
})
app.listen(Port, ()=>{
  console.log("AP working")
})
