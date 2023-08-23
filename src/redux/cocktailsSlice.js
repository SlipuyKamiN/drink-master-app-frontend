import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api`;

export const cocktailsApi = createApi({
  reducerPath: 'cocktailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['cocktails'],
  endpoints: builder => ({
    fetchAll: builder.query({
      query: () => ({ url: '/cocktails' }),
      providesTags: ['cocktails'],
    }),
    getAllIngredients: builder.query({
      query: () => ({ url: '/ingredients' }),
      providesTags: ['cocktails'],
    }),
    addCocktail: builder.mutation({
      query: ({
        drink,
        drinkAlternate,
        tags,
        video,
        category,
        IBA,
        alcoholic,
        glass,
        instructions,
        drinkThumb,
        ingredients,
      }) => ({
        url: '/cocktails',
        method: 'POST',
        body: {
          drink,
          drinkAlternate,
          tags,
          video,
          category,
          IBA,
          alcoholic,
          glass,
          instructions,
          drinkThumb,
          ingredients,
        },
      }),
      invalidatesTags: ['cocktails'],
    }),
    deleteCocktail: builder.mutation({
      query: ({ id }) => ({
        url: `/cocktails/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cocktails'],
    }),
  }),
});

export const {
  useFetchAllQuery,
  useAddCocktailMutation,
  useDeleteCocktailMutation,
} = cocktailsApi;
