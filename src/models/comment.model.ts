import mongoose, {Schema, Document} from "mongoose";

interface Comment extends Document {
    message:string[];
    blog:mongoose.Schema.Types.ObjectId;
}

export const CommentSchema : Schema<Comment> = new Schema({
    message: {
        type:[String] as any,
        required: true
    }
},
{
    timestamps: true
})

const Comment = mongoose.models.Comment as mongoose.Model<Comment>|| mongoose.model<Comment>("Comment", CommentSchema);

export default Comment