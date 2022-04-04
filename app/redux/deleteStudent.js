import axios from "axios";

const DELETE_STUDENT = "DELETE_STUDENT";

export const _deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student,
  };
};

export const deleteStudent = (id, history) => {
  return async (dispatch) => {
    const { data: student } = await axios.delete(`/api/students/${id}`);
    dispatch(_deleteStudent(student));
    history.push("/");
  };
};

export default function deleteStudentReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_STUDENT:
      return action.student;
    default:
      return state;
  }
}
