import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/users`;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    getCurrent: builder.query({
      query: () => ({ url: '/' }),
      providesTags: ['auth'],
    }),
    signup: builder.mutation({
      query: ({ name, email, password }) => ({
        url: '/signup',
        method: 'POST',
        body: { name, email, password },
      }),
      invalidatesTags: ['auth'],
    }),
    signin: builder.mutation({
      query: ({ email, password }) => ({
        url: '/signin',
        method: 'POST',
        body: { email, password },
      }),
      invalidatesTags: ['auth'],
    }),
    update: builder.mutation({
      query: ({ avatarURL, name }) => ({
        url: '/',
        method: 'PATCH',
        body: { avatarURL, name },
      }),
      invalidatesTags: ['auth'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['auth'],
    }),
    subscribe: builder.mutation({
      query: ({ email }) => ({
        url: '/subscribe',
        method: 'POST',
        body: { email },
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  useGetCurrentQuery,
  useSigninMutation,
  useSignupMutation,
  useUpdateMutation,
  useSubscribeMutation,
  useLogoutMutation,
} = authApi;
