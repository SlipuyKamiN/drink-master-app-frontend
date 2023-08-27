import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api`;

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
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
  tagTypes: ['recipes'],
  endpoints: builder => ({
    getCategoriesList: builder.query({
      query: () => ({ url: '/recipes/category-list' }),
      providesTags: ['recipes'],
    }),
    getMainPageRecipes: builder.query({
      query: () => ({ url: '/recipes/main-page' }),
      providesTags: ['recipes'],
    }),
    searchRecipes: builder.query({
      query: searchParams => ({ url: `/recipes/${searchParams}` }),
      providesTags: ['recipes'],
    }),
    getRecipeById: builder.query({
      query: id => ({ url: `/recipes/${id}` }),
      providesTags: ['recipes'],
    }),
    toggleFavorite: builder.mutation({
      query: id => ({ url: `/recipes/favorites/${id}`, method: 'PATCH' }),
      invalidatesTags: ['recipes'],
    }),
    getFavorites: builder.query({
      query: searchParams => ({ url: `/recipes/favorites/${searchParams}` }),
      providesTags: ['recipes'],
    }),
    getPopularList: builder.query({
      query: () => ({ url: '/recipes/popular-recipes' }),
      providesTags: ['recipes'],
    }),
    getIngredientsList: builder.query({
      query: () => ({ url: '/ingredients/list' }),
      providesTags: ['recipes'],
    }),
    getGlassList: builder.query({
      query: () => ({ url: '/glass' }),
      providesTags: ['recipes'],
    }),
  }),
});

export const {
  useGetCategoriesListQuery,
  useGetMainPageRecipesQuery,
  useSearchRecipesQuery,
  useGetRecipeByIdQuery,
  useGetIngredientsListQuery,
  useGetGlassListQuery,
  useToggleFavoriteMutation,
  useGetFavoritesQuery,
  useGetPopularListQuery,
} = recipesApi;
