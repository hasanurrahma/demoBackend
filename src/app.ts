import express from "express";
import { Request, Response, NextFunction } from "express";
import multer, { MulterError } from "multer";
import Routes from "./routes/routes";
import db from "./db/connection";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "https://deme1.netlify.app",
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://deme1.netlify.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/profile", express.static("upload/images"));
app.use(express.json());
app.use("/", Routes);
function errHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}
app.use(errHandler);
app.listen(4000, () => {
  console.log("Server up and running");
});
db();

export default app;
