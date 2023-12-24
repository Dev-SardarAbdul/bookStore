import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useEffect } from "react";
import { getAllBooksHook } from "../hooks/getAllBooks";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { getBooks, loading, error, books } = getAllBooksHook();
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-8">
        {" "}
        Anaton - Book Store
      </h2>

      <button
        className="py-2 px-4 mx-auto border-2 rounded-sm block mt-4 border-gray-500"
        onClick={() => navigate("/create")}
      >
        Add New Book?
      </button>

      {!books || books.length == 0 ? (
        <div>
          <h2 className="text-center mt-20 text-3xl font-bold">No Books!</h2>
          <button
            className="py-2 px-4 mx-auto border-2 rounded-sm block mt-4 border-gray-500"
            onClick={() => navigate("/create")}
          >
            Add One?
          </button>
        </div>
      ) : (
        <table className="w-full border-separate border-spacing-2 mt-20">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md py-2">No</th>
              <th className="border border-slate-600 rounded-md py-2">Title</th>
              <th className="border border-slate-600 rounded-md py-2 max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr className="h-8" key={book._id}>
                <td className="border border-slate-700 rounded-md text-center py-2">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center py-2">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center py-2 max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center py-2 max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center py-2">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/book/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/update/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
