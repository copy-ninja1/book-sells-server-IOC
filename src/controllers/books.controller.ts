import { autoInjectable, injectable } from "tsyringe";
import BookService from "@services/book.service";
import BaseController from "./base.controller";
import { Request, Response } from "express";
import { updateBookInput } from "@schemas/index";
import { fakeISBN } from "@helpers/index";

@autoInjectable()
export default class BookController extends BaseController {
  constructor(service?: BookService) {
    super(service!);
  }
  ISBNHandler = async (
    req: Request<updateBookInput["params"]>,
    res: Response
  ) => {
    try {
      const bookSI = new BookService();

      //fake isbn number
      let newISBN = fakeISBN();

      let book = bookSI.findOneAndUpdate(
        req.params,
        {
          isbn: newISBN,
        },
        { lean: true }
      );

      return res.status(200).json(book);

      // let o = this.put()
    } catch (error: any) {
      return res.status(500).send({ message: error.message });
    }
  };
}
