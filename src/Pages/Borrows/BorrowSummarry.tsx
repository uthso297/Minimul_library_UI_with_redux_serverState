import Swal from "sweetalert2";
import Loading from "../../Components/Loading";
import { useGetAllBorrowQuery, type Borrow } from "../../Redux/Api/borrowApi";

const BorrowSummary = () => {
    const { data, isLoading, isError } = useGetAllBorrowQuery();
    if (isLoading) return <Loading />;
    if (isError) {
        Swal.fire("Error", "Something went wrong while loading borrow summary.");
        return null;
    }

    const totalBooks = data?.data?.reduce((sum: number, item: Borrow) => sum + item.totalQuantity, 0);
    const overdueTitles = ["1984", "Pride and Prejudice"];

    return (
        <div className="p-4 md:p-6 space-y-6 mt-3">
            <h2 className="text-2xl font-bold">Borrow Summary</h2>
            <p className="text-sm text-gray-600">
                An aggregated summary of all books you have borrowed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm text-gray-500">Total Borrowed Books</p>
                    <h3 className="text-2xl font-semibold">{totalBooks}</h3>
                    <p className="text-xs text-gray-400 mt-1">All-time books borrowed.</p>
                </div>

                <div className="border border-red-400 bg-red-50 p-4 rounded-md">
                    <h4 className="text-red-600 font-semibold mb-1">⚠️ Overdue Books!</h4>
                    <p className="text-sm text-red-600 mb-2">
                        Please return these books immediately to avoid further charges.
                    </p>
                    <ul className="list-disc list-inside text-red-600 text-sm mb-3">
                        {overdueTitles.map((title, index) => (
                            <li key={index}>{title}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Currently Borrowed Books</h3>
                <div className="overflow-x-auto rounded border">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 whitespace-nowrap border-b">Title</th>
                                <th className="p-3 whitespace-nowrap border-b">ISBN</th>
                                <th className="p-3 whitespace-nowrap border-b">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data?.map((item: Borrow, index: number) => (
                                <tr key={index} className="border-t hover:bg-gray-50">
                                    <td className="p-3 border-b">{item.book.title}</td>
                                    <td className="p-3 border-b">{item.book.isbn}</td>
                                    <td className="p-3 border-b">
                                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                            {item.totalQuantity}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BorrowSummary;
