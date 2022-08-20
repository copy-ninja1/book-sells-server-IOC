import { object, string, number, TypeOf } from "zod";

const params = {
  params: object({
    id: string({
      required_error: "Book is required",
    }),
  }),
};
const body = {
  body: object({
    author: string().optional(),
    title: string().optional(),
    totalPages: number().optional(),
    isbn: string().optional(),
  }),
};

export const createBookSchema = object({
  body: object({
    author: string({
      required_error: "Owner id is required",
    }),
    title: string({
      required_error: "Title is required",
    }),
    totalPages: number({
      required_error: "Total Number of Pages is required",
    }),
    isbn: string().optional(),
  }),
});

export const getBook = object({
  ...params,
});

export const updateBook = object({
  ...params,
  ...body,
});

export type ReadBookInput = TypeOf<typeof getBook>;
export type updateBookInput = TypeOf<typeof updateBook>;

export type createBookInput = TypeOf<typeof createBookSchema>;
