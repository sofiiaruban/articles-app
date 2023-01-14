import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ArticleItems } from '../types/types'

const URL:string= process.env.REACT_APP_API_URI;

export const articleApi = createApi({

  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL}),
  endpoints: (builder) => ({
    getArticles: builder.query<ArticleItems, void>({
      query: () => "articles",
    }),
  }),
})

export const { useGetArticlesQuery } = articleApi