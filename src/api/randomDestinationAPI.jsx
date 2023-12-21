import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const randomDestinationAPI = createApi({
  reducerPath: "apiRandomDestination",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
  endpoints: (buider) => ({
    getRandomDestination: buider.query({
      query: () => ({
        url: "addresses",
        method: "GET",
      }),
    }),
})
})

export const {
  useGetRandomDestinationQuery,
} = randomDestinationAPI;
