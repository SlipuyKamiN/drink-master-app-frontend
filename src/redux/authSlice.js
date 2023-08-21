import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://641201246e3ca3175304119e.mockapi.io/api/auth',
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    fetchAll: builder.query({
      query: () => ({ url: '/auth' }),
      providesTags: ['auth'],
    }),
    addUser: builder.mutation({
      query: ({ name, number }) => ({
        url: '/auth',
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['auth'],
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/auth/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});

export const { useFetchAllQuery, useAddUserMutation, useDeleteUserMutation } =
  authApi;
