import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmploye(id).then((res) => {
      if (employees) {
        setEmployees((preElement) => {
          return preElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex h-12 my-8 justify-center items-center">
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
          {!loading && (
            <tbody className="bg-gray-400">
              {employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}
                ></Employee>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
