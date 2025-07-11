import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://l2-b5-a3-uthso.vercel.app/' }),
    endpoints: () => ({}),
})


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const baseApi = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://l2-b5-a3-uthso.vercel.app' }),
//     endpoints: (builder) => ({
//         getBooks: builder.query({
//             query: ()=> '/api/books'
//         })
//     }),
// })

// export const { useGetBooksQuery } = baseApi