// import express from "express";
// import { Request, Response } from "express";
// import multer from "multer";
// import path from "path";

// const router = express.Router();
// const storage = multer.diskStorage({
//   destination: "./upload/images",
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10 * 1024 * 1024,
//   },
// });

// router.post(
//   "/upload",
//   upload.single("profile"),
//   (req: Request, res: Response) => {
//     const profile_url = req.file?.filename
//       ? `http://localhost:4000/profile/${req.file.filename}`
//       : undefined;

//     res.json({
//       success: 1,
//       profile_url: profile_url,
//     });
//   }
// );

// export default router;

// import express from "express";
// import { Request, Response } from "express";
// import multer from "multer";
// import path from "path";

// const router = express.Router();
// const storage = multer.diskStorage({
//   destination: "./upload/images",
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10 * 1024 * 1024,
//   },
// });

// router.post(
//   "/upload",
//   upload.single("profile"),
//   (req: Request, res: Response) => {
//     // Retrieve the name from the request body
//     const name = req.body.name;

//     // Check if file was uploaded
//     const profile_url = req.file
//       ? `http://localhost:4000/profile/${req.file.filename}`
//       : undefined;

//     res.json({
//       success: 1,
//       name: name,
//       profile_url: profile_url,
//     });
//   }
// );

// export default router;

// import express from "express";
// import { Request, Response } from "express";
// import multer from "multer";
// import path from "path";

// const router = express.Router();
// const storage = multer.diskStorage({
//   destination: "./upload/images",
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10 * 1024 * 1024, // 10 MB
//   },
// });
// router.post(
//   "/upload",
//   upload.single("image"),
//   (req: Request, res: Response) => {
//     const {
//       makeAndMod,
//       rateCardSegment,
//       category,
//       vehicleColor,
//       licensePlate,
//     } = req.body;
//     const profile_url = req.file
//       ? `http://localhost:4000/profile/${req.file.filename}`
//       : undefined;
//     res.json({
//       success: 1,
//       makeAndMod: makeAndMod,
//       rateCardSegment: rateCardSegment,
//       category: category,
//       vehicleColor: vehicleColor,
//       licensePlate: licensePlate,
//       profile_url: profile_url,
//     });
//   }
// );

// export default router;
import express from "express";
import {
  uploadImageController,
  getVehicleImagesController,
} from "../controller/imageController"; // Corrected import statement
import { uploadImageService } from "../services/image.Service";
import { createVehicleSchema } from "../schemas/imageSchema";
import { validate } from "../middleware/validationmiddleware";

const router = express.Router();

router.post(
  "/upload",
  validate(createVehicleSchema),
  uploadImageService,
  uploadImageController
);
router.get("/images", getVehicleImagesController);

export default router;
