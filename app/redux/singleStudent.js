import Axios from "axios";

const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT";

export const getSingleStudent = (student) => {
  return { type: GET_SINGLE_STUDENT, student };
};

export const fetchSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get(`/api/students/${id}`);
      dispatch(getSingleStudent(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function singleStudentReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_STUDENT:
      return action.student;
    default:
      return state;
  }
}
