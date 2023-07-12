import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () =>
        "https://skyprofitness-5554f-default-rtdb.europe-west1.firebasedatabase.app/courses/.json",
      method: "GET",
    }),
  }),
});

export const { useGetAllCourses } = api;