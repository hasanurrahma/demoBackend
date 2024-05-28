import mongoose from "mongoose";

const db = () => {
  const url =
    "mongodb+srv://rhasanur234:X4gg8PGH1FbOEKQ7@cluster0.ochoajc.mongodb.net/";
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
