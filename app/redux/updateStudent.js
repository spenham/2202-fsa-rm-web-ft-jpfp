import Axios from "axios";

const UPDATE_STUDENT = "UPDATE_STUDENT";

export const _updateStudent = (student) => {
  return { type: UPDATE_STUDENT, student };
};

export const updateStudent = (student, history) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await Axios.put(
        `/api/students/${student.id}`,
        student
      );
      dispatch(_updateStudent(updated));
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
};

export default function updateStudentReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_STUDENT:
      return state.map((student) =>
        student.id === action.student.id ? action.student : student
      );
    default:
      return state;
  }
}
