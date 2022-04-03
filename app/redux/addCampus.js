import axios from "axios";

const ADD_CAMPUS = "ADD_CAMPUS";

export const _addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus,
  };
};

export const addCampus = (campus, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/campuses", campus);
    dispatch(_addCampus(created));
    history.push("/");
  };
};

export default function addCampusReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CAMPUS:
      return action.todo;
    default:
      return state;
  }
}
