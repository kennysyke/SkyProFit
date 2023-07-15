import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const fitnesApi = createApi({
 
  reducerPath: "fitnesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skyprofitness-5554f-default-rtdb.europe-west1.firebasedatabase.app",
   
  }),
  
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => '/courses.json',             
    }),  
    
  }),
});

export const { useGetCoursesQuery } = fitnesApi;
