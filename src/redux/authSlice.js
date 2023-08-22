import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['auth'],
  // endpoints: builder => ({
  //   fetchAll: builder.query({
  //     query: () => ({ url: '/auth' }),
  //     providesTags: ['auth'],
  //   }),
  //   addUser: builder.mutation({
  //     query: ({ name, number }) => ({
  //       url: '/auth',
  //       method: 'POST',
  //       body: { name, number },
  //     }),
  //     invalidatesTags: ['auth'],
  //   }),
  //   deleteUser: builder.mutation({
  //     query: ({ id }) => ({
  //       url: `/auth/${id}`,
  //       method: 'DELETE',
  //     }),
  //     invalidatesTags: ['auth'],
  //   }),
  // }),
});

export const { useFetchAllQuery, useAddUserMutation, useDeleteUserMutation } =
  authApi;
