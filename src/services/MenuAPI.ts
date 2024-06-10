import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://5ac9-2409-40c2-115e-c8c0-e8aa-d2d1-b43-11.ngrok-free.app/api/v1/",
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning",
  },
});
export const getMenuitemsAPI = async () => {
  try {
    const { data } = await axiosInstance.get("menu");
    return data.data;
  } catch (error: any) {
    return error.message;
  }
};

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
