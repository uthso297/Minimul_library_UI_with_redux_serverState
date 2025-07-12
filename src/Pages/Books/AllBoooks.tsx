import { Link } from "react-router";
import Loading from "../../Components/Loading";
import {
    useDeleteBookMutation,
    useGetBooksQuery,
    type IBook,
} from "../../Redux/Api/booksApi";
import Swal from "sweetalert2";

const AllBooks = () => {
    const { data, isLoading, isError, error } = useGetBooksQuery();
    const [deleteBook, { isLoading: isDeleting, isError: deleteError }] =
        useDeleteBookMutation();

    const handleDelete = async (id: string) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                await deleteBook(id).unwrap();
                Swal.fire('Deleted!', 'The book has been deleted.', 'success');
            } catch (err) {
                console.error("Failed to delete the book:", err);
                Swal.fire('Error', 'Something went wrong while deleting the book.', 'error');
            }
        }
    };


    if (isLoading || isDeleting) {
        return <Loading />;
    }

    if (isError || deleteError) {
        console.error("Error fetching or deleting books:", error);
        return <p className="text-red-600">Error loading books</p>;
    }

    return (
        <div className="px-4 md:px-8 lg:px-16 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">All Available Books</h2>
            <p className="text-gray-500 mb-6">
                A comprehensive catalog of all books in the LibraryMate system.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data?.data?.map((book: IBook) => (
                    <div
                        key={book._id}
                        className="bg-white shadow-md rounded-lg p-4 border border-gray-100 hover:shadow-lg transition"
                    >
                        <img
                            src={book.url}
                            alt={book.title}
                            className="w-full h-48 rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
                        <p className="text-sm text-gray-500 mb-1">{book.author}</p>

                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 text-xs bg-gray-200 rounded-md">
                                {book.genre}
                            </span>
                            <span
                                className={`px-2 py-1 text-xs rounded-md font-semibold ${book.available
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {book.available ? "Available" : "Unavailable"}
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-between items-center mt-4 gap-2 text-sm">
                            <Link to={`/books/${book._id}`}>
                                <button className="text-blue-600 hover:underline">View Details</button>
                            </Link>
                            <Link to={`/edit-book/${book._id}`}>
                                <button title="Edit Book" className="text-yellow-500 hover:underline">
                                    ✏️
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(book._id)}
                                title="Delete Book"
                                className="text-red-500 hover:underline"
                            >
                                🗑️
                            </button>
                            <Link to={`/borrow/${book._id}`}>
                                <button
                                    disabled={!book.available}
                                    className={`px-3 py-1 rounded text-white text-xs font-medium ${book.available
                                        ? "bg-pink-500 hover:bg-pink-600"
                                        : "bg-gray-400 cursor-not-allowed"
                                        }`}
                                >
                                    Borrow
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;
