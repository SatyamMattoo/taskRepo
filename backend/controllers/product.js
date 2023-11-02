import axios from "axios";
import ErrorHandler from "../middlewares/errorHandler.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const apiUrl = "https://healthkangaroo.com/api/HkUser/searchMedicineData";
    const response = await axios.get(apiUrl);

    if (response.data.success === "1" && response.data.details) {
      let medicineData = response.data.details;
      res.json({
        success: true,
        message: "Medicine data fetched",
        data: medicineData,
      });
    } else {
      return new ErrorHandler("Error fetching data", 500);
    }
  } catch (error) {
    console.log(error)
    next(error);
  }
};
