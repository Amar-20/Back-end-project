import express from 'express';
// Cross Origin Resource Sharing. 
import cors from 'cors';  
import cookieParser from 'cookie-parser';

const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static('public'))
// We can safely access the clients web browser cookies, perform some opeations on it and aslo safely put some cookies.
app.use(cookieParser())

app.get((req,res)={})

export {app}