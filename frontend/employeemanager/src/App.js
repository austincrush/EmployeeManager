import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="bg-gray-600 h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
