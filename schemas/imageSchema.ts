// import Joi from "joi";

// export const createVehicleSchema = Joi.object({
//   makeAndMod: Joi.string(),
//   rateCardSegment: Joi.string(),
//   category: Joi.string(),
//   vehicleColor: Joi.string(),
//   licensePlate: Joi.string(),
//   filename: Joi.string(),
//   path: Joi.string(),
// });

import Joi from "joi";

export const createVehicleSchema = Joi.object({
  makeAndMod: Joi.string(),
  rateCardSegment: Joi.string(),
  category: Joi.string(),
  vehicleColor: Joi.string(),
  licensePlate: Joi.string(),
  filename: Joi.string(),
  path: Joi.string(),
});
