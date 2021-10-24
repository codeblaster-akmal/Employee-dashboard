import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE
} from './employeeTypes'

const baseUrl = process.env.REACT_APP_BASE_URL;

const getEmployees = async (dispatch) => {

  dispatch(fetchEmployeesRequest());
  const res = await fetch(`${baseUrl}/employees`);
  const data = await res.json();
  dispatch(fetchEmployeesSuccess(data));
  if (res.status === 404) dispatch(fetchEmployeesFailure("Something wents wrong on server.."));
}


export const fetchEmployees = () => {
  return (dispatch) => {
    getEmployees(dispatch);
  }
}

export const fetchEmployeesRequest = () => {
  return {
    type: FETCH_EMPLOYEES_REQUEST
  }
}

export const fetchEmployeesSuccess = employees => {
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: employees
  }
}

export const fetchEmployeesFailure = error => {
  return {
    type: FETCH_EMPLOYEES_FAILURE,
    payload: error
  }
}
