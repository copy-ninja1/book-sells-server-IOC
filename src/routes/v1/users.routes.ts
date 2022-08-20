import { Router } from "express";
import UserController from "@controllers/user.controller";
import validate from "@middlewares/validate";
import { createUserSchema } from "@schemas/index";

const userRouter = Router();
const userController = new UserController();

userRouter.get("/", userController.get);
userRouter.post("/", validate(createUserSchema), userController.post);
userRouter.get("/:id", userController.getById);
userRouter.delete("/:id", userController.delete);

export default userRouter;
