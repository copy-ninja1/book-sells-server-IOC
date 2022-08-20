import { type } from "os";
import {
  ReadBookInput,
  createBookInput,
  getBook,
  updateBook,
  updateBookInput,
  createBookSchema,
} from "./book.schema";
import { CreateUserInput, createUserSchema } from "./user.schema";

export type {
  ReadBookInput,
  updateBookInput,
  createBookInput,
  CreateUserInput,
};

export { getBook, createBookSchema, createUserSchema, updateBook };
