import React from "react";
import { connect } from "react-redux";
import { fetchSingleStudent } from "../redux/singleStudent";

export class SingleStudent extends React.Component {
  componentDidMount() {
    try {
      console.log("PARAMS: ", this.props.match.params);
      this.props.loadSingleStudent(this.props.match.params.id);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const student = this.props.student;
    console.log("WORKING HERE: ", this.props);
    console.log("STUDENT", student);
    return (
      <div>
        <h1>
          {student.firstName} {student.lastName}
        </h1>
        <h3>Email: {student.email}</h3>
        <h4>GPA: {student.gpa}</h4>
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