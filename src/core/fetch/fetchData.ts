import { getErrorMessage } from "../utils/getErrorMessage";

export const fetchData = async () => {
  try {
    const res = await fetch("data/data.json");
    return res.json();
  } catch (err) {
    const errMessage = getErrorMessage(err);
    console.log("Error while fetching data : ", errMessage);
    throw err;
  }
};
