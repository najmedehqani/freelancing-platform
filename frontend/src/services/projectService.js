import http from "./httpService";

export async function getOwnerProjectsApi() {
  return http.get("/project/owner-projects");
}

export async function removeProjectApi(id) {
  return http.delete(`/project/${id}`);
}

export async function createProjectApi(data) {
  return http.post(`/project/add`, data);
}

export async function editProjectApi({ id, newProject }) {
  return http.patch(`/project/update/${id}`, newProject);
}

export async function toggleProjectStatusApi({ id, data }) {
  //{status:"OPEN"}
  return http.patch(`/project/${id}`, data);
}

export async function getProjectApi(id) {
  return http.get(`/project/${id}`);
}

export async function getProjectsApi(qs) {
  return http.get(`/project/list${qs}`);
}
