import React from "react";
import { connect } from "react-redux";
import { fetchSingleStudent } from "../redux/singleStudent";
import UpdateStudent from "./UpdateStudent";

export class SingleStudent extends React.Component {
  componentDidMount() {
    try {
      this.props.loadSingleStudent(this.props.match.params.id);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const student = this.props.student;
    return (
      <div>
        <h1>
          {student.firstName} {student.lastName}
        </h1>
        <h3>Email: {student.email}</h3>
        <h4>GPA: {student.gpa}</h4>
        <p>
          {/* ~~~~~~~~~~~~~~~~~~~~FIX THE BELOW WHEN YOU FIGURE OUT THE FOREIGN KEY~~~~~~~~~~~~~~~~~~~~ */}
          {student.campusId
            ? student.campusId
            : "This student does not yet have a campus"}
          {/* ~~~~~~~~~~~~~~~~~~~~FIX THE ABOVE WHEN YOU FIGURE OUT THE FOREIGN KEY~~~~~~~~~~~~~~~~~~~~ */}
        </p>
        <div>Update:</div>
        <UpdateStudent />
        <img src={student.imageUrl} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSingleStudent: (id) => dispatch(fetchSingleStudent(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleStudent);
