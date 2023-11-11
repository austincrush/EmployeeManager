import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-md font-semibold text-gray-900">
          {employee.first_name}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-md font-semibold text-gray-900">
          {employee.last_name}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-md font-semibold text-gray-900">
          {employee.email}
        </div>
      </td>
      <td className="text-right py-4 whitespace-nowrap">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="shadow-lg rounded-md border-b border-gray-800 text-white bg-blue-600 hover:bg-blue-800 hover:cursor-pointer py-1 px-3"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="shadow-lg rounded-md border-b border-gray-800 text-white bg-red-600 hover:bg-red-800 hover:cursor-pointer py-1 px-3 mx-2"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};
export default Employee;
