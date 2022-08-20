import { injectable, singleton } from "tsyringe";
import mongoose from "mongoose";
import ModelI from "../interfaces/model.interface";
import BookI from "../interfaces/book.interface";

@singleton()
@injectable()
export default class BookModel implements ModelI {
  schema: mongoose.Schema<any> = new mongoose.Schema(
    {
      id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
      title: {
        type: String,
        required: true,
      },
      totalPages: {
        type: Number,
        required: true,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      isbn: {
        type: String,
        required: false,
      },
    },
    {
      timestamps: true,
    }
  );
  model: mongoose.Model<any, {}> = mongoose.model<BookI>("Book", this.schema);
}
