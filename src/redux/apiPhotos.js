import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";
axios.defaults.baseURL =
  "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["Photos"],
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      query: () => ({ url: `` }),
      providesTags: ["Photos"],
    }),
  }),
});

export const { useFetchPhotosQuery } = photosApi;
