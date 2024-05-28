// import {
//   VehicleImageDocument,
//   VehicleImageDraft,
//   VehicleImage,
// } from "../models/image.js";
// import mongoose from "mongoose";

// import path from "path"; // Import the 'path' module to handle file paths
// import fs from "fs"; // Import the 'fs' module for file system operations

// class VehicleImageService {
//   public async createVehicle(
//     vehicleImageDraft: VehicleImageDraft & { image: Express.Multer.File }
//   ): Promise<VehicleImageDocument> {
//     try {
//       const { makeAndMod, rateCardSegment, vehicleColor, licensePlate, image } =
//         vehicleImageDraft;
//       // Get the absolute path to the 'uploads' directory
//       const uploadDir = path.join(__dirname, "..", "uploads");

//       // Construct the full path for the uploaded image
//       const imagePath = path.join(uploadDir, image.filename);

//       // Check if the file exists before accessing it
//       if (!fs.existsSync(imagePath)) {
//         throw new Error(`File ${imagePath} not found.`);
//       }

//       const newVehicle = new VehicleImage({
//         makeAndMod,
//         rateCardSegment,
//         vehicleColor,
//         licensePlate,
//         image: imagePath,
//         category: "SomeCategory",
//       });

//       return await newVehicle.save();
//     } catch (error) {
//       console.error("Error creating vehicle:", error);
//       throw error;
//     }
//   }

//   public async deleteVehicle(vehicleId: string): Promise<void> {
//     try {
//       if (!mongoose.Types.ObjectId.isValid(vehicleId)) {
//         throw new Error("Invalid Vehicle ID.");
//       }

//       const objectId = new mongoose.Types.ObjectId(vehicleId);

//       const deletedVehicle = await VehicleImage.findByIdAndDelete(objectId);

//       if (!deletedVehicle) {
//         throw new Error("Vehicle not found.");
//       }
//     } catch (error) {
//       console.error("Error deleting vehicle:", error);
//       throw error;
//     }
//   }
// }

// export default new VehicleImageService();

// import multer from "multer";
// import path from "path";

// const storage = multer.diskStorage({
//   destination: "./upload/images",
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// export const uploadImageService = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10 * 1024 * 1024, // 10 MB
//   },
// }).single("image");

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

export const uploadImageService = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
}).single("image");
