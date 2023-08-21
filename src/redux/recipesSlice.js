import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://641201246e3ca3175304119e.mockapi.io/api/recipes',
  }),
  tagTypes: ['recipes'],
  endpoints: builder => ({
    fetchAll: builder.query({
      query: () => ({ url: '/recipes' }),
      providesTags: ['recipes'],
    }),
    addRecipe: builder.mutation({
      query: ({ name, number }) => ({
        url: '/recipes',
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['recipes'],
    }),
    deleteRecipe: builder.mutation({
      query: ({ id }) => ({
        url: `/recipes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['recipes'],
    }),
  }),
});

export const {
  useFetchAllQuery,
  useAddRecipeMutation,
  useDeleteRecipeMutation,
} = recipesApi;
