import mongoose from "mongoose";

//Connecting to database
export const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017", {
      dbName: "task",
    })
    .then((data) =>
      console.log(`Connected to database on ${data.connection.host}`)
    )
};
