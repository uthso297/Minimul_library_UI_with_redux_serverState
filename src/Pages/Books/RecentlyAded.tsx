import Loading from "../../Components/Loading";
import { useGetRecentBooksQuery, type IBook } from "../../Redux/Api/booksApi";

const RecentlyAded = () => {

    const { data, isLoading, isError, error } = useGetRecentBooksQuery();

    if (isLoading) {
        return (
            <Loading></Loading>
        );
    }
    if (isError) {
        console.error("Error fetching books:", error);
        return <p>Error loading books</p>;
    }
    console.log(data);
    return (
        <div className="px-4 md:px-8 lg:px-16 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Recently Added Books</h2>
            <p className="text-gray-500 mb-6">Discover the new books that recently came</p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data?.data?.map((book: IBook) => (
                    <div key={book._id} className="bg-white shadow-md rounded-lg p-4 border border-gray-100 hover:shadow-lg transition">
                        <img
                            src={book.url}
                            alt={book.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
                        <p className="text-sm text-gray-500 mb-1">{book.author}</p>

                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 text-xs bg-gray-200 rounded-md">{book.genre}</span>
                            <span className={`px-2 py-1 text-xs rounded-md font-semibold ${book.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                {book.available ? "Available" : "Borrowed"}
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-between items-center mt-4 gap-2 text-sm">
                            <button className="text-blue-600 hover:underline">View Details</button>
                            <button title="Edit Book" className="text-yellow-500 hover:underline">✏️</button>
                            <button title="Delete Book" className="text-red-500 hover:underline">🗑️</button>
                            <button
                                disabled={!book.available}
                                className={`px-3 py-1 rounded text-white text-xs font-medium ${book.available ? "bg-pink-500 hover:bg-pink-600" : "bg-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                Borrow
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyAded;