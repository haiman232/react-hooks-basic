import axios from "axios";

const axiosClient = axios.create({
  // Cài đặt các config
  baseURL: "https://www.ezfrontend.com/", // khi gọi Api thường đi vs các đường dẫn nên phải chỉ định baseUrl pử đây
  headers: {
    "Contetn-Type": "appication/json",
  },
});

//Interceptor: mình muốn làm gì đấy cho tất cả các request hay tất cả reponse thì sẽ gắn cái Interceptor này vào. Tìm trong github cách sử dụng

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
