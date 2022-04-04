import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStudents } from "../redux/students";
import { AddStudent } from "./AddStudent";
import DeleteStudent from "./DeleteStudent";

export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.fetchStudentsThunk();
  }

  render() {
    return (
      <div>
        <h1>
          <u>Student List</u>
        </h1>

        {this.props.students.map((student) => (
          <div key={student.id}>
            <Link to={`/students/${student.id}`} key={student.id}>
              <h2>
                {student.firstName} {student.lastName}
              </h2>
            </Link>
            <DeleteStudent />
          </div>
        ))}
        <div>
          <h2>Add Student:</h2>
          <AddStudent />
        </div>
      </div>
    );
  }
}

const mapState = (reduxState) => {
  return {
    students: reduxState.students,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudentsThunk: () => dispatch(fetchStudents()),
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
