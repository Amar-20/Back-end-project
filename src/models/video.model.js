import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const video_schema = new Schema(
    {
        videoFile:{
            type:String,
            required:true,

        },
        thumnail:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        duration:{
            type:Number,
            required:true,
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            required:true,
        },
        onwer:{
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    },
    {
        timestamps:true
    }
)
video_schema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model('Video',video_schema)