import axiosClient from "./axiosClient";

const productApi = {
  getAll(params) {
    const url = "/products";
    return axiosClient.get(url, { params: params }); // Do key và value giống tên nên {params: params} có thể viết tắt {params}
  },
  get(id) {
    //get 1 item
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/products";
    return axiosClient.push(url, data);
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.path(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
