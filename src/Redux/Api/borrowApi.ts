import { baseApi } from "./baseApi"

export interface IBorrow {
    book: string,
    quantity: number,
    dueDate: string
}
export interface Borrow {
    book: {
        title: string;
        isbn: string;
    },
    totalQuantity: number;
}


export interface BorrowApiResPonse {
    success: boolean;
    message: string;
    data: object
}
export interface GetBorrowApiResPonse {
    success: boolean;
    message: string;
    data: Borrow[]
}

export const borrowApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBorrow: builder.mutation<BorrowApiResPonse, IBorrow>({
            query: (newBorrow) => ({
                url: 'api/borrow',
                method: 'POST',
                body: newBorrow
            }),
            invalidatesTags: (_result, _error, { book }) => [{ type: 'Book', id: book }],
        }),
        getAllBorrow: builder.query<GetBorrowApiResPonse, void>({
            query: () => 'api/borrow',
            providesTags: ['Book']
        })
    })
})

export const { useCreateBorrowMutation, useGetAllBorrowQuery } = borrowApi