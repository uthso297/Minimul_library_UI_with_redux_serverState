import { baseApi } from "./baseApi";

export interface IBook {
    _id: string;
    title: string;
    author: string;
    genre: 'FICTION' | 'NON_FICTON' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
    url: string;
}

export interface BooksApiResponse {
    success: boolean;
    message: string;
    data: IBook[];
}
export interface SingleBooksApiResponse {
    success: boolean;
    message: string;
    data: IBook;
}
export interface DeleteBookApiResponse {
    success: boolean;
    message: string;
    data: null;
}

export const booksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query<BooksApiResponse, void>({
            query: () => 'api/books',
            providesTags: ['books']
        }),
        getRecentBooks: builder.query<BooksApiResponse, void>({
            query: () => 'api/books?sortBy=createdAt&sort=desc&limit=5',
            providesTags: ['books']
        }),
        getSingleBook: builder.query<SingleBooksApiResponse, string>({
            query: (id) => `api/books/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Book', id }],
        }),
        createBook: builder.mutation<IBook, Omit<IBook, "_id">>({
            query: (newBook) => ({
                url: 'api/books',
                method: 'POST',
                body: newBook,
            }),
            invalidatesTags: ['books']
        }),
        deleteBook: builder.mutation<DeleteBookApiResponse, string>({
            query: (id) => ({
                url: `api/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['books']
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetSingleBookQuery,
    useGetRecentBooksQuery,
    useCreateBookMutation,
    useDeleteBookMutation
} = booksApi;
