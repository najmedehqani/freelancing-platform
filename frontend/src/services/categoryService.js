import http from "./httpService";

export async function getCategoriesApi() {
  return http.get("/category/list");
}
export async function getCategoryApi(id) {
  return http.get(`/category/${id}`);
}

export async function createCategoryApi(data) {
  return http.post(`admin/category/add`, data);
}

export async function editCategoryApi({ id, data }) {
  return http.patch(`admin/category/update/${id}`, data);
}
export async function removeCategoryApi(id) {
  return http.delete(`admin/category/remove/${id}`);
}
