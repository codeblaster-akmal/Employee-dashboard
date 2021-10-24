import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { fetchEmployees } from '../redux/employee/employeeActions'
import "../styles/dashboard.css";

const Dashboard = ({ employeeData, getEmployees }) => {

    useEffect(() => {
        getEmployees()
    }, [getEmployees]);

    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <div>
                    <div>
                        <ul className="responsive-table">
                            <li className="table-header">
                                <div className="col col-1">Id</div>
                                <div className="col col-2">Employee Name</div>
                                <div className="col col-3">Age</div>
                                <div className="col col-4">Gender</div>
                                <div className="col col-5">E-mail</div>
                                <div className="col col-6">Phone</div>
                            </li>
                            {
                                employeeData.loading ?
                                    (
                                        <h2>Loading! Please wait.....</h2>
                                    ) : employeeData.error ? (
                                        <h2>{employeeData.error}</h2>
                                    ) : (
                                        employeeData.employees?.length &&
                                        employeeData.employees?.map(employee => {
                                            return (
                                                <li className="table-row" key={employee.id}>
                                                    <div className="col col-1" data-label=" Id">{employee.id}</div>
                                                    <div className="col col-2" data-label="Employee Name">{employee.name}</div>
                                                    <div className="col col-3" data-label="Age">{employee.age}</div>
                                                    <div className="col col-4" data-label="Gender">{employee.gender}</div>
                                                    <div className="col col-5" data-label="E-mail">{employee.email}</div>
                                                    <div className="col col-6" data-label="Phone">{employee.phoneNo}</div>
                                                </li>
                                            )
                                        })
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        employeeData: state.employee
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEmployees: () => dispatch(fetchEmployees())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)