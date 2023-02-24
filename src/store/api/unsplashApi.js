import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const photoApi = createApi({
  reducerPath: "photo",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
  }),
  tagTypes: ["Photo"],
  endpoints: (builder) => ({
    randomPhoto: builder.query({
      query: (random) => ({
        url: `/photos/random`,
        params: {
          client_id: import.meta.env.VITE_UNSPLASH_ACCESS,
          collections: "_OSPKWiUrVo",
        },
      }),
      transformErrorResponse: (res, meta, arg) => {
        if (res.status === 401) {
          res = {
            status: 200,
            data: {
              urls: {
                thumb: `/public/fallback.jpg`,
              },
              alt_description: "Error while retreiving",
            },
          };

          return res.data;
        }

        return res.data;
      },
    }),
  }),
});

export const { useRandomPhotoQuery } = photoApi;
export { photoApi };
