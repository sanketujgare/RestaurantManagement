import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://5ac9-2409-40c2-115e-c8c0-e8aa-d2d1-b43-11.ngrok-free.app/api/v1/",
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning",
  },
});

export const postOrderAPI = async (orderData) => {
  try {
    console.log(orderData);
    const response = await axiosInstance.post("/order", orderData);
    return response;
  } catch (error: any) {
    return error.message;
  }
};

export const getordersAPI = async () => {
  try {
    const response = await axiosInstance.get("orders");
    return response.data.data;
  } catch (error: any) {
    return error.message;
  }
};

export const updateOrdersAPI = async (id, orderstatus) => {
  console.log(orderstatus, id);
  try {
    const response = await axiosInstance.put(`/orders/${id}`, {
      orderStatus: orderstatus,
    });
    return response;
  } catch (error: any) {
    return error.message;
  }
};
