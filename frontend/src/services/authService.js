import http from "./httpService";

export async function getOtp(data) {
  return http.post("/user/get-otp", data);
}

export async function checkOtp(data) {
  return http.post("/user/check-otp", data);
}

export async function completeProfile(data) {
  return http.post("/user/complete-profile", data);
}

export async function getUser() {
  return http.get("/user/profile");
}

export async function logoutApi() {
  return http.post("/user/logout");
}

export async function getUsersApi() {
  return http.get("/admin/user/list");
}

export async function changeUserStatusApi({ userId, data }) {
  // data => {status:0, 1, 2}
  return http.patch(`/admin/user/verify/${userId}`, data);
}

export async function updateProfileApi(data) {
  return http.patch("user/update", data);
}
