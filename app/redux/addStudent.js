import axios from "axios";

const ADD_STUDENT = "ADD_STUDENT";

export const _addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student,
  };
};

export const addStudent = (student, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/students", student);
    dispatch(_addStudent(created));
    history.push("/");
  };
};

export default function addStudentReducer(state = {}, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return action.student;
    default:
      return state;
  }
}
