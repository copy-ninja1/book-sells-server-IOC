import mongoose from "mongoose";
// import { PostI } from "./post.interface";


export default interface UserDocument extends mongoose.Document {
    emailAddress: string;
    fullName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(password: string): Promise<boolean>;
  }
  