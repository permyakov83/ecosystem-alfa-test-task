import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Image {
  id: string
  url: string
}

export type ImagesApiResponse = Image[]

export const imagesApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1/images/search",
    prepareHeaders: headers => {
      headers.set("Content-Type", "application/json")
      headers.set(
        "X-API-KEY",
        "live_cWjWIGrm8s2tXlzEJmhoMm39g7vjeEaTcxbRrf71tIYo8Hy7OEXgLcPsD7R8KbwO",
      )
      return headers
    },
  }),
  reducerPath: "imagesApi",
  tagTypes: ["Images"],
  endpoints: build => ({
    getImages: build.query<ImagesApiResponse, number>({
      query: (limit = 9) => `?limit=${limit}`,
      providesTags: (result, error) => [{ type: "Images" }],
    }),
  }),
})

export const { useGetImagesQuery } = imagesApiSlice
