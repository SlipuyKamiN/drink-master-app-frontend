import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { resetUser, setUser } from './userSlice';

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api`;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    signup: builder.mutation({
      query: ({ name, email, password }) => ({
        url: '/auth/signup',
        method: 'POST',
        body: { name, email, password },
      }),
      invalidatesTags: ['auth'],
    }),
    signin: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/signin',
        method: 'POST',
        body: { email, password },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setUser((await queryFulfilled).data));
      },
      invalidatesTags: ['auth'],
    }),
    currentUser: builder.query({
      query: () => ({
        url: '/auth/current',
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(resetUser());
      },
      invalidatesTags: ['auth'],
    }),
    updateUser: builder.mutation({
      query: body => ({
        url: '/auth/user',
        method: 'PATCH',
        body,
        formData: true,
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
  useSigninMutation,
  useSignupMutation,
  useCurrentUserQuery,
  useLogoutMutation,
  useUpdateUserMutation,
  useSubscribeMutation,
} = authApi;
