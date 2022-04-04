import Axios from "axios";

const UPDATE_CAMPUS = "UPDATE_CAMPUS";

export const _updateCampus = (campus) => {
  return { type: UPDATE_CAMPUS, campus };
};

export const updateCampus = (campus, history) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await Axios.put(
        `/api/campuses/${campus.id}`,
        campus
      );
      dispatch(_updateCampus(updated));
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
};

export default function updateCampusReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_CAMPUS:
      return state.map((campus) =>
        campus.id === action.campus.id ? action.campus : campus
      );
    default:
      return state;
  }
}
