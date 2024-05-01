import mongoose, { Schema , Document } from "mongoose";

export interface Admin extends Document {
    name: string;
    email: string;
    photo: string;
    password: string;
}

const AdminSchema : Schema<Admin> = new Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    photo: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    }
},{
    timestamps: true
})

const Admin = mongoose.models.Admin as mongoose.Model<Admin>|| mongoose.model<Admin>("Admin", AdminSchema);

export default Admin;