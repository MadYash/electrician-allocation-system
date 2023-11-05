import axios from "axios";

export const getSiteData = async (callback) => {
  try {
    await axios
      .get("http://localhost:8001/get-siteData")
      .then((res) => callback(res.data))
      .catch((err) => callback(err));
  } catch (error) {
    console.log(error);
  }
};

export const getElectricianData = async (callback) => {
  try {
    await axios
      .get("http://localhost:8001/get-electrician")
      .then((res) => callback(res.data))
      .catch((err) => callback(err));
  } catch (error) {
    console.log(error);
  }
};

export const updateDate = async (id, data, callback) => {
  try {
    await axios
      .post(`http://localhost:8001/upate/${id}`, data)
      .then((res) => callback(res.data))
      .catch((err) => callback(err));
  } catch (error) {
    console.log(error);
  }
};
