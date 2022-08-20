import mongoose from "mongoose";
import UserDocument from "./user.interface";

export default interface BookDocument extends mongoose.Document {
  title: string;
  author: UserDocument["id"];
  totalPages: number;
  isbn?: number;
  createdAt: Date;
  updatedAt: Date;
}
