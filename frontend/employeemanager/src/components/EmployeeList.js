import React from "react";
import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-10">
      <div className="flex h-12 my-12 justify-center items-center">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded-md bg-gray-800 font-semibold text-white px-4 py-3"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow-xl border-b border-gray-300">
        <table className="min-w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="text-left font-medium-semibold text-white uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium-semibold text-white uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium-semibold text-white uppercase tracking-wider py-3 px-6">
                Email
              </th>
              <th className="text-right font-medium-semibold text-white uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-400">
            <tr>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-md font-semibold text-gray-900">
                  Austin
                </div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-md font-semibold text-gray-900">Rush</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-md font-semibold text-gray-900">
                  rushaustin44@gmail.com
                </div>
              </td>
              <td className="text-right px-6 py-4 whitespace-nowrap">
                <a href="#" className="text-blue-600 hover:text-blue-800 px-4">
                  {" "}
                  Edit{" "}
                </a>
                <a href="#" className="text-red-600 hover:text-red-800">
                  {" "}
                  Delete{" "}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
