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
      <td className="text-right px-6 py-4 whitespace-nowrap">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-blue-600 hover:text-blue-800 hover:cursor-pointer px-4"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-red-600 hover:text-red-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};
export default Employee;
