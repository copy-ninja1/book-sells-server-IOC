import { Router } from "express";
import BookController from "@controllers/books.controller";
import validate from "@middlewares/validate";
import { createBookSchema, updateBook } from "@schemas/index";

const bookRouter = Router();
const bookController = new BookController();

bookRouter.get("/", bookController.get);
bookRouter.post("/", validate(createBookSchema), bookController.post);
bookRouter.get("/:id", bookController.getById);
bookRouter.delete("/:id", bookController.delete);
bookRouter.put("/:id", validate(updateBook), bookController.updateOne);
bookRouter.patch("/:id/isbn", validate(updateBook), bookController.ISBNHandler);

export default bookRouter;
