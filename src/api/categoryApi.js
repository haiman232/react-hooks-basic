import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = "/categories";
    return axiosClient.get(url, { params: params }); // Do key và value giống tên nên {params: params} có thể viết tắt {params}
  },
  get(id) {
    //get 1 item
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/categories";
    return axiosClient.push(url, data);
  },
  update(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.path(url, data);
  },
  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
