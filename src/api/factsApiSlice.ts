import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface FactsApiResponse {
  data: string[]
}

export const factsApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://meowfacts.herokuapp.com/",
  }),
  reducerPath: "factsApi",
  tagTypes: ["Facts"],
  endpoints: build => ({
    getFacts: build.query<FactsApiResponse, number>({
      query: (limit = 9) => `?lang=rus&count=${limit}`,
      providesTags: (result, error) => [{ type: "Facts" }],
    }),
  }),
})

export const { useGetFactsQuery } = factsApiSlice
