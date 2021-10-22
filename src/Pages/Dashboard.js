import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { fetchEmployees } from '../redux/employee/employeeActions'

const Dashboard = ({ employeeData, fetchEmployees }) => {

    useEffect(() => {
        fetchEmployees()
    }, [fetchEmployees]);

    return (
        <div className="App">
            <Navbar />
            <div className="content">
                {
                    employeeData.loading ?
                        (
                            <h2>Loading</h2>
                        ) : employeeData.error ? (
                            <h2>{employeeData.error}</h2>
                        ) : (
                            <div>
                                <h2>Employees List</h2>
                                <div>
                                    {
                                        employeeData.employees?.length &&
                                        employeeData.employees?.map(employee => {
                                            return (
                                                <p>{employee.name}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                }
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
        fetchEmployees: () => dispatch(fetchEmployees())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
