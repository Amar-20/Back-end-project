// const dotenv = require('dotenv').config({path:'./env'}) 
// this(above line) lead to code inconsistency so we use(below)

import dotenv from 'dotenv';
dotenv.config({
    path:'./env'
})



import connectDB from './db/index.js';
import { app } from './app.js';


/** 2)Approach to connect to DB.(importing the db function defined file.) and executing it in main file(index.js) like below */

connectDB()
//by importing the connectDB function file which is async code. After execution of this function we 'promise'(.then() and .catch()).
.then(()=>{
    app.on('error',(error)=>{  
        console.log('Errpr:',error)
        throw error
    })
   app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is up and running on port ${process.env.PORT}` )
   }) 
})
.catch((err)=>{
    console.log("MONGODB connection failed!!:",err);
})

// Thisis how we connnet to DB acco to mongoose doc.
// const connect= mongoose.connect('') 

// But, it not recommanded to do this way of connect. Always use (try and catch for error handling) and Async code function.
/**---------------------------------------------------------------------------------- */
// function connectDB(){}

// connectDB()
/**------------------------------------------(OR)---------------------------------------------- */

/*--- 1)First Approach. Connect to database using IIFE, used 'try and catch' for error handling , used Async for database being in other continent.

import mongoose from 'mongoose';
import { DB_NAME } from './constant';

const express = require('express')
const app=express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGDB_URL}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log("Error:",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) { 
        console.log('ERROR:',error)
        throw error
        
    }
})()
*/