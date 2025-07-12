import { useState } from "react";
import type { IBook } from "../../Redux/Api/booksApi";
import { useCreateBookMutation } from "../../Redux/Api/booksApi";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import Loading from "../../Components/Loading";

type NewBookForm = Omit<IBook, "_id" | "copies"> & {
  copies: string;
};

const initialFormData: NewBookForm = {
  title: "",
  author: "",
  genre: "FICTION",
  isbn: "",
  description: "",
  copies: "",
  available: true,
  url: "",
};

const CreateBook = () => {
  const [formData, setFormData] = useState<NewBookForm>(initialFormData);
  const [createBook, { isLoading }] = useCreateBookMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === "checkbox" && e.target instanceof HTMLInputElement
        ? e.target.checked
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBook = {
      ...formData,
      copies: Number(formData.copies),
    } as Omit<IBook, "_id">;

    try {
      await createBook(newBook).unwrap();
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Book added successfully!',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      setFormData(initialFormData);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `There was an error creating the book.Error: ${err}`,
      });
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 max-w-4xl mx-auto border-2 border-[#EBEBEA] mt-6 mb-3">
      <h1 className="text-2xl font-bold">Create New Book</h1>

      {isLoading && <Loading />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          required
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter book title"
          className="border-2 border-[#EBEBEA] rounded-lg px-2 py-1"
        />
        <input
          type="text"
          required
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author's full name"
          className="border-2 border-[#EBEBEA] rounded-lg px-2 py-1"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          required
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="border-2 border-[#EBEBEA] rounded-lg px-2 py-1"
        >
          <option value="SCIENCE">Science</option>
          <option value="FICTION">Fiction</option>
          <option value="NON_FICTON">Non-Fiction</option>
          <option value="HISTORY">History</option>
          <option value="BIOGRAPHY">Biography</option>
          <option value="FANTASY">Fantasy</option>
        </select>
        <input
          type="text"
          required
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          placeholder="Enter ISBN e.g., 978-0321765723"
          className="border-2 border-[#EBEBEA] rounded-lg px-2 py-1"
        />
      </div>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Provide a brief summary or description of the book"
        className="w-full border-2 border-[#EBEBEA] rounded-lg px-2 py-1"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          required
          type="number"
          name="copies"
          value={formData.copies}
          onChange={handleChange}
          placeholder="Number of available copies"
          min={0}
          className="border-2 border-[#EBEBEA] rounded-lg px-2 py-1"
        />
        <input
          required
          type="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Link to book image"
          className="border-2 border-[#EBEBEA] rounded-lg px-2 py-1"
        />
      </div>

      <div className="flex gap-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Book
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateBook;
