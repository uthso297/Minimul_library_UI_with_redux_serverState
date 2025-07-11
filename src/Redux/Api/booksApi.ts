import { baseApi } from "./baseApi"

export interface IBook {
    _id: string,
    title: string,
    author: string,
    genre: 'FICTION' | 'NON_FICTON' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY',
    isbn: string,
    description: string,
    copies: number,
    available: boolean,
    url: string
}

export const booksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query<IBook[], void>({
            query: () => 'api/books'
        })
    })
})

export const { useGetBooksQuery } = booksApi
