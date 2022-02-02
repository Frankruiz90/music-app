import axios from "axios";
import {
  BASEURL
} from "../constants/Constans";

export const getDataUser = async (token) => {
  try {
    return await axios.get(`${BASEURL}/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }

}