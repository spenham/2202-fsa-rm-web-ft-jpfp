import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { deleteStudent } from "../redux/deleteStudent";

export class DeleteStudent extends React.Component {
  render() {
    return (
      <form onSubmit={(ev) => ev.preventDefault()}>
        <button
          type="button"
          className="remove"
          onClick={() => this.props.deleteStudent(this.props.match.params.id)}
        >
          Delete (X)
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ student }) => ({
  student,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  deleteStudent: (student) => dispatch(deleteStudent(student, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStudent);

// () => this.props.deleteCampus(this.props.match.params.id)
