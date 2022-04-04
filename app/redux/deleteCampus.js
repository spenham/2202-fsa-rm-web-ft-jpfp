import axios from "axios";

const DELETE_CAMPUS = "DELETE_CAMPUS";

export const _deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus,
  };
};

export const deleteCampus = (id, history) => {
  return async (dispatch) => {
    const { data: campus } = await axios.delete(`/api/campuses/${id}`);
    dispatch(_deleteCampus(campus));
    history.push("/");
  };
};

export default function deleteCampusReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
