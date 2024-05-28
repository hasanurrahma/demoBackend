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
