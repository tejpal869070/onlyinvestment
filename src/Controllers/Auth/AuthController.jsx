import axios from "axios";
import { API } from "../Api";

export const CheckUserExistance = async (formData) => {
  try {
    const postData = {
      mobile: formData.mobile,
      email: formData.email,
    };

    const response = await axios.post(
      `${API.url}user/check-user-existence`,
      postData
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userRegistration = async (userData) => {
  try {
    const postData = {
      user_name: userData.user_name,
      mobile: userData.mobile,
      password: userData.password,
      email: userData.email,
    };

    const response = await axios.post(`${API.url}user/register`, postData);

    return response.data;
  } catch (error) {
    throw error;
  }
};



export const SendOtp = async (formData) => {
    try { 
      const dataToSend = {
        email: formData.email,
      };
      const response = await axios.post(`${API.url}user/get-otp`, dataToSend);
      return response.data;
    } catch (error) {
      throw error;
    }
  };