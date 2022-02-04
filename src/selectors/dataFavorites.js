import axios from "axios";
import {
  BASEURL
} from "../constants/Constans";

export const getDataFavorites = async (token) => {
  try {
    return await axios.get(`${BASEURL}/v1/me/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export const addTrackFavorites = async (id, token) => {
  try {
    return await axios.put(`${BASEURL}/v1/me/tracks`, {
      ids: [`${id}`]
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
export const deleteTrackFavorites = async (id, token) => {
  try {
    return await axios.delete(`${BASEURL}/v1/me/tracks?ids=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
}