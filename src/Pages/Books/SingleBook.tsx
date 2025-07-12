import { useParams } from "react-router";
import { useGetSingleBookQuery } from "../../Redux/Api/booksApi";
import Loading from "../../Components/Loading";

const SingleBook = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, isError, error } = useGetSingleBookQuery(id ?? "")
    console.log(data);

    const book = data?.data;

    if (isLoading) {
        return (
            <Loading></Loading>
        );
    }
    if (isError) {
        console.error("Error fetching books:", error);
        return <p>Error loading books</p>;
    }
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg mt-5 border-[1px] border-[#EBEBEA]">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Book Cover */}
                <div className="w-full md:w-1/4 flex justify-center">
                    <img
                        src={book?.url}
                        alt={book?.title}
                        className="w-48 h-72 object-cover rounded shadow"
                    />
                </div>

                {/* Book Info */}
                <div className="w-full md:w-3/4 space-y-4">
                    <h2 className="text-2xl font-bold">{book?.title}</h2>
                    <p className="text-gray-600 text-lg font-medium">{book?.author}</p>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {book?.genre}
                    </span>
                    <p className="text-gray-700 mt-2">{book?.description}</p>

                    <div className="flex gap-3 mt-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                            Borrow Book
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm">
                            Edit Details
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
                {/* Key Details */}
                <div className="border border-[#EBEBEA] rounded p-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Details</h4>
                    <p><strong>ISBN:</strong> {book?.isbn}</p>
                    <p><strong>Pages:</strong> N/A</p>
                    <p><strong>Language:</strong> English</p>
                </div>

                {/* Availability */}
                <div className="border border-[#EBEBEA] rounded p-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Availability & Location</h4>
                    <p>
                        <strong>Status:</strong>{" "}
                        <span className={`text-sm px-2 py-1 rounded ${book?.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {book?.available ? "Available" : "Unavailable"}
                        </span>
                    </p>
                    <p><strong>Copies:</strong> {book?.copies}</p>
                    <p><strong>Location:</strong> Dhaka</p>
                </div>

                {/* Reader Reviews */}
                <div className="border border-[#EBEBEA] rounded p-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Reader Reviews</h4>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-semibold">4.3</span>
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-sm text-gray-500">(55 reviews)</span>
                    </div>

                    {/* Fake bars */}
                    <div className="mt-4 space-y-2">
                        <div className="bg-gray-200 rounded h-2">
                            <div className="bg-blue-500 h-2 rounded w-[75%]"></div>
                        </div>
                        <div className="bg-gray-200 rounded h-2">
                            <div className="bg-blue-400 h-2 rounded w-[20%]"></div>
                        </div>
                        <div className="bg-gray-200 rounded h-2">
                            <div className="bg-blue-300 h-2 rounded w-[5%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SingleBook;