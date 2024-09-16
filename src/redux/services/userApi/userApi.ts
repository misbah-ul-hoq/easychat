import api from "@/redux/api/api";
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";

const userApiSlice = api.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        object,
        FetchBaseQueryMeta
      >,
      never,
      "api"
    >
  ) => ({
    createUser: build.mutation({query: (body){return {url: "/users/create", method: "POST", body}} }),
  }),
  overrideExisting: false
});

export const {crea} = userApiSlice