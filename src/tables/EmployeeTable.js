import React from 'react'

const EmployeeTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Lastname</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.employees.length > 0 ? (
        props.employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.lastname}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(employee)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteEmployee(employee.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No employees</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default EmployeeTable
