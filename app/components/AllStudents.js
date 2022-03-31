import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../redux/students";

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.fetchStudentsThunk();
    console.log("this one is working too");
  }
  render() {
    return (
      <div className="studentList">
        {this.props.students.map((student) => (
          <div key={student.id} className="student">
            <h2>{student.firstName}</h2>
          </div>
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
