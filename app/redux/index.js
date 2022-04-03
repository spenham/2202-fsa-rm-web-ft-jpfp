import { combineReducers } from "redux";
import campusesReducer from "./campuses";
import studentsReducer from "./students";
import singleStudentReducer from "./singleStudent";
import singleCampusReducer from "./singleCampus";
import addCampusReducer from "./addCampus";
import addStudentReducer from "./addStudent";

const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  student: singleStudentReducer,
  campus: singleCampusReducer,
  addCampus: addCampusReducer,
  addStudent: addStudentReducer,
});

export default appReducer;
