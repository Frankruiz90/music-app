import axios from "axios";
import {
  BASEURL
} from "../constants/Constans";

export const getDataRecomended = async (token) => {
  try {
    return await axios.get(`${BASEURL}/v1/playlists/37i9dQZF1DX1rVvRgjX59F`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log('eror', error);

  }
}