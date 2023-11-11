package com.example.EmployeeManager.service;

import com.example.EmployeeManager.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();
}
