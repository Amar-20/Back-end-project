import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';




const connectDB = async()=>{
    try {
        //mongoose gives a return object after connecting. we are holding that responses in variable called connectionInstance.
        const connectionInstance = await mongoose.connect(`${process.env.MONGDB_URL}/${DB_NAME}`)
        console.log(`\n Mongodb connected!! DB_Host: ${connectionInstance.connection.host}`) // to know to which server we have connected.(connection.host)
    } catch (error) {
        console.log("MONGODB connection Failed:",error)
        // throw will exit the app and process
        // throw error   
        process.exit(1)  
        
    }
}

export default connectDB 