import { Request, Response } from "express";
import { VehicleImage } from "../models/image";

interface MulterFile {
  filename: string;
  path: string;
}

export const uploadImageController = (req: Request, res: Response) => {
  const { makeAndMod, rateCardSegment, category, vehicleColor, licensePlate } =
    req.body;

  const file = req.file as MulterFile;

  if (!file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }

  try {
    const newVehicleImage = new VehicleImage({
      makeAndMod,
      rateCardSegment,
      category,
      vehicleColor,
      licensePlate,
      filename: file.filename,
      path: file.path,
    });

    newVehicleImage.save();

    res.json({
      success: 1,
      message: "Image uploaded successfully",
      data: newVehicleImage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: 0,
      message: "Internal server error",
    });
  }
};

export const getVehicleImagesController = async (
  req: Request,
  res: Response
) => {
  try {
    const vehicleImages = await VehicleImage.find();
    // res.json({
    //   success: 1,
    //   message: "Vehicle images retrieved successfully",
    //   data: vehicleImages,
    // });
    res.send(vehicleImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: 0,
      message: "Internal server error",
    });
  }
};
