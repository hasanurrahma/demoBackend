import mongoose from "mongoose";

const db = () => {
  const url =
    "mongodb+srv://rhasanur234:2zZIvzXz76j1GpyT@cluster0.ochoajc.mongodb.net/demo?retryWrites=true&w=majority";

  mongoose
    .connect(url, { serverSelectionTimeoutMS: 5000 }) // Adjust the timeout as needed
    .then(() => {
      console.log("Database is connected");
    })
    .catch((e: Error) => {
      console.log("Database is not connected", e);
    });
};

export default db;
