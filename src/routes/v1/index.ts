import { Router } from "express";
import bookRouter from "./books.routes";
import userRouters from "./users.routes";

const router = Router();

router.use("/users", userRouters);
router.use("/books", bookRouter);

export default router;
