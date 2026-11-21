import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err),
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (
      err?.response?.status === 401 &&
      originalConfig &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  },
);

const unwrap = (request) => request.then((res) => res.data?.data);

const http = {
  get: (...args) => unwrap(app.get(...args)),
  patch: (...args) => unwrap(app.patch(...args)),
  put: (...args) => unwrap(app.put(...args)),
  delete: (...args) => unwrap(app.delete(...args)),
  post: (...args) => unwrap(app.post(...args)),
};

export default http;
