import { app } from "./app.js";
import { connectDB } from "./configs/database.js";

connectDB();

//Error handler for uncaught exceptions - console.log(undefinedvar)
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

const server = app.listen(4000, (req, res) =>
  console.log("server is working")
);

//Mongodb URL error handler
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
