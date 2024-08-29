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

export const ChangePasswordControll = async (formData) => {
  try {
    const postData = {
      mobile: mobile,
      password: formData.password,
      new_password: formData.new_password,
    };

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };

    const response = await axios.post(
      `${API.url}user/change-password`,
      postData,
      axiosConfig
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DepositRequest = async (formData) => {
  const formDataToSend = new FormData();
  formDataToSend.append("transection_id", formData.transection_id);
  formDataToSend.append("mobile", mobile);
  formDataToSend.append("d_image", formData.d_image);
  formDataToSend.append("amount", formData.amount);
  formDataToSend.append("deposit_id", formData.deposit_id);

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.post(
      `${API.url}user/deposit-request`,
      formDataToSend,
      axiosConfig
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
