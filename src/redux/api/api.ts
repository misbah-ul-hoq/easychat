import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const baseUrl =
  process.env.NODE_ENV == "development" ? "http://localhost:3000" : "";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: () => ({}),
});

export default api;
