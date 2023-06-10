import axios from "axios";

const BASE_URL = "http://localhost:8000"; 

export const get = async (endpoint, config = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const post = async (endpoint, data, config = {}) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, data, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const put = async (endpoint, data, config = {}) => {
  try {
    const response = await axios.put(`${BASE_URL}${endpoint}`, data, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const del = async (endpoint, config = {}) => {
  try {
    const response = await axios.delete(`${BASE_URL}${endpoint}`, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
