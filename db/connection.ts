import mongoose from "mongoose";

const db = () => {
  const url = "mongodb://127.0.0.1:27017/Veho";
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database is connected");
    })
    .catch((e: Error) => {
      console.log("Database is not connected ", e);
    });
};

export default db;
