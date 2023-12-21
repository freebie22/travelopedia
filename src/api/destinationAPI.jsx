import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationAPI = createApi({
  reducerPath: "apiDestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  tagTypes: ["Destinations"],
  endpoints: (buider) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/PATCH/DELETE
    getAllDestination: buider.query({
      query: () => ({
        url: "destination",
        method: "GET",
        params: {}
      }),
      transformResponse: (res) => res.sort((a,b) => b.id - a.id),
      providesTags: ["Destinations"],
    }),
    // getAllDestination: buider.query({
    //   query: (id) => `destination/${id}`,
    //   providesTags: (id) => {
    //     return [{type: 'Destination', id:id}]
    //   }
    // }),
    addDestination: buider.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["Destinations"]
    }),
    updateDestination: buider.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: ["Destinations"]
    }),
    deleteDestination: buider.mutation({
      query: (id) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Destinations"]
    }),
  }),
});

export const {
  useGetAllDestinationQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationAPI;
