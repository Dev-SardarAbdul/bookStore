import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

function Home() {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-8">
        {" "}
        Anaton - Book Store
      </h2>

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
          <tr className="h-8">
            <td className="border border-slate-700 rounded-md text-center py-2">
              1
            </td>
            <td className="border border-slate-700 rounded-md text-center py-2">
              title
            </td>
            <td className="border border-slate-700 rounded-md text-center py-2 max-md:hidden">
              author
            </td>
            <td className="border border-slate-700 rounded-md text-center py-2 max-md:hidden">
              publishYear
            </td>
            <td className="border border-slate-700 rounded-md text-center py-2">
              <div className="flex justify-center gap-x-4">
                <Link>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
