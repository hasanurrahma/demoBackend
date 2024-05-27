// import mongoose, { Schema, Document, Model } from "mongoose";

// export interface VehicleImageDraft {
//   makeAndMod: string;
//   rateCardSegment: string[];
//   category: string;
//   vehicleColor: string;
//   licensePlate: string;
//   image: string;
// }

// export interface VehicleImageDocument extends VehicleImageDraft, Document {}

// interface VehicleImageModel extends Model<VehicleImageDocument> {}

// const VehicleImageSchema: Schema = new mongoose.Schema<VehicleImageDocument>(
//   {
//     makeAndMod: { type: String },
//     rateCardSegment: [{ type: String }],
//     category: { type: String },
//     vehicleColor: { type: String },
//     licensePlate: { type: String },
//     image: { type: String },
//   },
//   { timestamps: true }
// );

// export const VehicleImage = mongoose.model<
//   VehicleImageDocument,
//   VehicleImageModel
// >("VehicleImage", VehicleImageSchema);

import mongoose, { Schema, Document, Model } from "mongoose";

export interface VehicleImageDraft {
  makeAndMod: string;
  rateCardSegment: string;
  category: string;
  vehicleColor: string;
  licensePlate: string;
  filename: string; // Updated field
  path: string; // Updated field
}

export interface VehicleImageDocument extends VehicleImageDraft, Document {}

interface VehicleImageModel extends Model<VehicleImageDocument> {}

const VehicleImageSchema: Schema = new mongoose.Schema<VehicleImageDocument>(
  {
    makeAndMod: { type: String },
    rateCardSegment: { type: String },
    category: { type: String },
    vehicleColor: { type: String },
    licensePlate: { type: String },
    filename: { type: String }, // Updated field
    path: { type: String }, // Updated field
  },
  { timestamps: true }
);

export const VehicleImage = mongoose.model<
  VehicleImageDocument,
  VehicleImageModel
>("VehicleImage", VehicleImageSchema);
