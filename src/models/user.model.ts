import { injectable, singleton } from "tsyringe";
import mongoose from "mongoose";
import ModelI from "../interfaces/model.interface";
import UserSI from "../interfaces/user.interface";

@singleton()
@injectable()
export default class UserModel implements ModelI {
  schema: mongoose.Schema<any> = new mongoose.Schema(
    {
      id: {
        type: String,
        required: true,
        unique: true,
        index: true,
        default: mongoose.Types.ObjectId,
      },
      fullName: {
        type: String,
        required: true,
      },
      emailAddress: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      books: {
        type: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Books",
          },
        ],
      },
    },
    {
      timestamps: true,
    }
  );
  model: mongoose.Model<any, {}> = mongoose.model<UserSI>("users", this.schema);
}
