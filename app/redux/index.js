import { combineReducers } from "redux";
import campusesReducer from "./campuses";
import studentsReducer from "./students";
import singleStudentReducer from "./singleStudent";

const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  student: singleStudentReducer,
});

export default appReducer;
