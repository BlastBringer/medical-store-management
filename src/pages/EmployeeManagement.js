import React, { useState } from 'react';
import '../components/Management.css';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    Employee_ID: '',
    Employee_Name: '',
    Contact_Number: '',
    Position: '',
    Salary: ''
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Create Employee
  const handleAddEmployee = () => {
    setEmployees([...employees, { ...newEmployee, Employee_ID: Date.now() }]);
    setNewEmployee({
      Employee_ID: '',
      Employee_Name: '',
      Contact_Number: '',
      Position: '',
      Salary: ''
    });
  };

  // Update Employee
  const handleUpdateEmployee = (id) => {
    const updatedEmployees = employees.map((employee) =>
      employee.Employee_ID === id ? { ...employee, ...newEmployee } : employee
    );
    setEmployees(updatedEmployees);
    setNewEmployee({
      Employee_ID: '',
      Employee_Name: '',
      Contact_Number: '',
      Position: '',
      Salary: ''
    });
  };

  // Delete Employee
  const handleDeleteEmployee = (id) => {
    const filteredEmployees = employees.filter(
      (employee) => employee.Employee_ID !== id
    );
    setEmployees(filteredEmployees);
  };

  // Search/Filter Employees
  const filteredEmployees = employees.filter((employee) =>
    employee.Employee_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.Position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="management-container slide-in">
      <h2>Employee Management</h2>
      <p>Manage employee information, including details like position and salary.</p>

      {/* Search Filter */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Search by name or position"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add Employee Form */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Employee Name"
          value={newEmployee.Employee_Name}
          onChange={(e) => setNewEmployee({ ...newEmployee, Employee_Name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={newEmployee.Contact_Number}
          onChange={(e) => setNewEmployee({ ...newEmployee, Contact_Number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          value={newEmployee.Position}
          onChange={(e) => setNewEmployee({ ...newEmployee, Position: e.target.value })}
        />
        <input
          type="number"
          placeholder="Salary"
          value={newEmployee.Salary}
          onChange={(e) => setNewEmployee({ ...newEmployee, Salary: e.target.value })}
        />
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>

      {/* Employee Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Contact Number</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.Employee_ID}>
                <td>{employee.Employee_ID}</td>
                <td>{employee.Employee_Name}</td>
                <td>{employee.Contact_Number}</td>
                <td>{employee.Position}</td>
                <td>{employee.Salary}</td>
                <td>
                  <button onClick={() => setNewEmployee(employee)}>Edit</button>
                  <button onClick={() => handleDeleteEmployee(employee.Employee_ID)}>Delete</button>
                  <button onClick={() => handleUpdateEmployee(employee.Employee_ID)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeManagement;
