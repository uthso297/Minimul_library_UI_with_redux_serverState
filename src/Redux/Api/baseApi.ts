import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://l2-b5-a3-uthso.vercel.app/' }),
    endpoints: () => ({}),
})
