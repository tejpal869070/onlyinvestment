import axios from "axios";
import Cookies from "js-cookie";
import { API } from "../Api";

var mobile = Cookies.get("mobile");
var bearerToken = Cookies.get("token");

export const GetUserDetails = async () => {
  try {
    const postData = {
      mobile: mobile,
    };

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };

    const response = await axios.post(
      `${API.url}user/user-details`,
      postData,
      axiosConfig
    );

    if (response.data.status) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
