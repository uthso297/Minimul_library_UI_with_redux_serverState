import { useParams } from "react-router";
import { useState, useEffect } from "react";
import {
    useGetSingleBookQuery,
    useUpdateBookCopiesMutation
} from "../../Redux/Api/booksApi";
import Loading from "../../Components/Loading";
import Swal from "sweetalert2";

const EditBook = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, isError,refetch } = useGetSingleBookQuery(id ?? "");
    const [updateBookCopies, { isLoading: updating }] = useUpdateBookCopiesMutation();

    const book = data?.data;

    const [copies, setCopies] = useState<number>(0);

    useEffect(() => {
        if (book) setCopies(book.copies);
    }, [book]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateBookCopies({ id: book?._id, copies }).unwrap();
            Swal.fire("Success", "Book copies updated successfully!", "success");
            await refetch()
        } catch (err) {
            let message = "Failed to update book copies.";
            if (err instanceof Error) {
                message += ` ${err.message}`;
            }

            Swal.fire("Error", message, "error");
        }
    };

    if (isLoading || updating) return <Loading />;
    if (isError) return <p className="text-red-500">Error loading book...</p>;

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 m-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Edit Book Copies</h2>

            <div className="space-y-2 mb-6 flex flex-col md:flex-row">
                <img src={book?.url} alt={book?.title} className="md:w-48 mt-2 rounded w-full" />
                <div className="space-y-4 md:py-2 md:px-6">
                    <p className="font-bold text-2xl">Book Details</p>
                    <p><strong>Title:</strong> {book?.title}</p>
                    <p><strong>Author:</strong> {book?.author}</p>
                    <p><strong>Genre:</strong> {book?.genre}</p>
                    <p><strong>ISBN:</strong> {book?.isbn}</p>
                    <p><strong>Description:</strong> {book?.description}</p>
                    <p><strong>Available:</strong> {book?.available === true ? 'Yes' : 'No'}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="copies" className="block text-sm font-medium">
                        Number of Copies
                    </label>
                    <input
                        type="number"
                        id="copies"
                        min={0}
                        value={copies}
                        onChange={(e) => setCopies(Number(e.target.value))}
                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
                >
                    Update Copies
                </button>
            </form>
        </div>
    );
};

export default EditBook;
