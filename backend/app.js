import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/users.js";
import productRouter from "./routes/product.js";
import { error } from "./middlewares/errorHandler.js";

export const app = express();

const corsOptions={
    origin: "http://localhost:5173",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
}

app.use(cors(corsOptions));

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);

//Error Middleware
app.use(error);

app.get("/", (req, res) => console.log("Working"));
