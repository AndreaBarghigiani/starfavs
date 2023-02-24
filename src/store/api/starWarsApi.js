import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `https://swapi.dev/api/`;
const returnId = (str) => str.replace(baseUrl, "").split(`/`)[1];

const starApi = createApi({
  reducerPath: "starwars",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: ({ type = "people", id }) => {
        return {
          url: id ? `${type}/${id}` : `${type}`,
        };
      },
    }),
    searchAny: builder.query({
      query: ({ type, name }) => ({
        url: type,
        params: {
          search: name,
        },
      }),
    }),
    fetchMore: builder.query({
      query: (next) => ({
        url: `people`,
        params: {
          page: returnId(next),
        },
      }),
    }),
  }),
});

export const { useFetchDataQuery, useSearchAnyQuery } = starApi;
export { starApi };
