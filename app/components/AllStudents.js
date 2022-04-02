import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStudents } from "../redux/students";

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
          <Link to={`/students/${student.id}`} key={student.id}>
            <div key={student.id} className="student">
              <h2>
                {student.firstName} {student.lastName}
              </h2>
            </div>
          </Link>
        ))}
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
