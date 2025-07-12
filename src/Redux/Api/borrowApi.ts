import { baseApi } from "./baseApi"

export interface IBorrow {
    book: string,
    quantity: number,
    dueDate: string
}

export interface BorrowApiResPonse {
    success: boolean;
    message: string;
    data: object
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
        })
    })
})

export const { useCreateBorrowMutation } = borrowApi