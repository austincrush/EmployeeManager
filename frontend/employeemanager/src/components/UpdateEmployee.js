import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    first_name: "",
    last_name: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();
    console.log(employee);
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex rounded-3xl my-14 max-w-2xl mx-auto justify-center shadow- border-b border-gray-900 bg-gray-800">
      <div className="px-8 py-8">
        <div className="font-semibold text-2xl tracking-wider">
          <h1 className="text-center text-white"> Update Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="text-center block text-white text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            value={employee.first_name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border-b border-gray-200 mt-2 px-2 py-2 rounded-md bg-gray-400 text-gray-800 font-semibold text-center"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="text-center block text-white text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            value={employee.last_name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border-b border-gray-200 mt-2 px-2 py-2 rounded-md  bg-gray-400 text-gray-800 font-semibold text-center"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="text-center block text-white text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border-b border-gray-200 mt-2 px-2 py-2 rounded-md  bg-gray-400 text-gray-800 font-semibold text-center"
          ></input>
        </div>
        <div className="flex items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={() => navigate("/employeeList")}
            className="shadow-lg border-b border-gray-400 text-white rounded font-semibold px-3 py-2 bg-red-500 hover:bg-red-700"
          >
            Cancel
          </button>
          <button
            onClick={updateEmployee}
            className="shadow-lg border-b border-gray-400 text-white rounded font-semibold px-3 py-2 bg-green-500 hover:bg-green-700"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
