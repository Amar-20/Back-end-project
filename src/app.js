import express from 'express';
// Cross Origin Resource Sharing. 
import cors from 'cors';  
import cookieParser from 'cookie-parser';

const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// we can get request in many forms(form,json,url,body etc.,)so we define config and limit.
app.use(express.json({limit:'16kb'}))
// config url 
app.use(express.urlencoded({extended:true,limit:'16kb'}))
// to store files temp.
app.use(express.static('public'))
// We can safely access the clients web browser cookies, perform some opeations on it and aslo safely put some cookies.
app.use(cookieParser())


//routes

import userRouter from './routes/user.routes.js';

//routes declaration
app.use('/api/v1/users',userRouter)
//http://localhost:8000/api/v1/users/



export {app}