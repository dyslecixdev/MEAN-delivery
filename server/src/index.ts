import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import { dbConnect } from "./configs/database.config";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

dbConnect();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(colors.black.bgCyan.italic(`Server started on port ${port}`));
});
