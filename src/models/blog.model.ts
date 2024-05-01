import mongoose, { Schema,Document } from "mongoose";
import { CommentSchema } from "./comment.model";

export interface Blog extends Document {
    title: string;
    description: string;
    image: string;
    category: string;
    author: mongoose.Schema.Types.ObjectId;
    comments: typeof CommentSchema[];
    likes: number;
    isPublished: boolean;
    isDraft: boolean;
    views: number;
}

const BlogSchema : Schema<Blog> = new Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    category: {
        type:String,
        required: true
    },
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Admin" 
    },
    comments: [CommentSchema],
    likes: {
        type:Number,
        default: 0
    },
    isPublished: {
        type:Boolean,
        default: true
    },
    isDraft: {
        type:Boolean,
        default: false
    },
    views: {
        type:Number,
        default: 0
    }
},
{
    timestamps: true
})

const Blog = mongoose.models.Blog as mongoose.Model<Blog>|| mongoose.model<Blog>("Blog", BlogSchema);

export default Blog;