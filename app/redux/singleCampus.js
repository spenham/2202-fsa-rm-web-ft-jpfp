import Axios from "axios";

const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS";

export const getSingleCampus = (campus) => {
  return { type: GET_SINGLE_CAMPUS, campus };
};

export const fetchSingleCampus = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get(`/api/campuses/${id}`);
      dispatch(getSingleCampus(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function singleCampusReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
