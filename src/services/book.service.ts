import { FilterQuery, UpdateQuery } from "mongoose";
import { autoInjectable, injectable } from "tsyringe";
import BookI from "@interfaces/book.interface";
import BookModel from "@models/book.model";
import BaseService from "./base.service";

@autoInjectable()
export default class BookService extends BaseService<BookI> {
  constructor(modelI?: BookModel) {
    super(modelI!);
  }
}
