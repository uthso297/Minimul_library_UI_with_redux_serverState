import { Link, useParams } from "react-router";
import { useGetSingleBookQuery } from "../../Redux/Api/booksApi";
import { useState } from "react";
import Loading from "../../Components/Loading";
import { useCreateBorrowMutation, type IBorrow } from "../../Redux/Api/borrowApi";
import Swal from "sweetalert2";

const Borrow = () => {
    const { BookId } = useParams<{ BookId: string }>();
    const { data, isLoading, refetch } = useGetSingleBookQuery(BookId ?? "");
    const [createBorrow, { isLoading: loading }] = useCreateBorrowMutation();

    const [copy, setcopy] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [agreed, setAgreed] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const quantity = parseInt(copy)
        const book = BookId ? BookId : ''
        const borrow: IBorrow = {
            book,
            quantity,
            dueDate,
        };
        try {
            await createBorrow(borrow).unwrap()
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Borrowed book successfully!',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            await refetch();
            // e.target.reset()
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `There was an error borrowing the book.Error: ${error}`,
            });
        }
    };

    if (isLoading || loading) return <Loading></Loading>;
    const Book = data?.data;

    return (
        <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-6 bg-white rounded-lg mt-6">
            <div className="w-full md:w-1/2 border p-6 rounded-lg border-[#EBEBEA]">
                <h2 className="text-2xl font-bold mb-1">{Book?.title}</h2>
                <p className="text-sm text-gray-600 mb-2">by {Book?.author}</p>
                <img src={Book?.url} alt={Book?.title} className="w-full h-64 rounded" />
                <p className="text-sm text-gray-700 mt-4">
                    <span className="font-semibold">Genre:</span> {Book?.genre}
                </p>
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">Available Copies:</span> {Book?.copies}
                </p>
                <hr className="border-[#EBEBEA] mt-3" />
                <div className="flex items-center justify-end">
                    <Link to={`/books/${BookId}`}>
                        <button className="mt-4 border px-4 py-2 rounded hover:bg-gray-200 text-sm">
                            View Full Details
                        </button>
                    </Link>
                </div>
            </div>

            <div className="w-full md:w-1/2 border p-6 rounded-lg border-[#EBEBEA] h-fit">
                <h3 className="text-xl font-semibold mb-2">Borrow This Book</h3>
                <p className="text-sm text-gray-600 mb-4">
                    Please fill out the details to complete your borrowing.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm block mb-1" htmlFor="copy">
                            Enter copy
                        </label>
                        <input
                            type="number"
                            id="copy"
                            value={copy}
                            onChange={(e) => setcopy(e.target.value)}
                            className="w-full border rounded px-3 py-2 text-sm"
                            placeholder="e.g. 2"
                            min="1"
                            max={Book?.copies}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm block mb-1" htmlFor="dueDate">
                            Enter Due Date
                        </label>
                        <input
                            type="date"
                            id="dueDate"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="w-full border rounded px-3 py-2 text-sm"
                            required
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="w-4 h-4"
                        />
                        <label htmlFor="terms" className="text-sm">
                            I agree to the LibraryMate borrowing terms.
                        </label>
                    </div>
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            className="border px-4 py-2 rounded hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!agreed}
                            className={`px-4 py-2 rounded text-white ${agreed ? "bg-indigo-500 hover:bg-indigo-600" : "bg-indigo-200"
                                }`}
                        >
                            Confirm Borrow
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Borrow;
