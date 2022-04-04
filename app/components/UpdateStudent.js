import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudent } from "../redux/updateStudent";
import { fetchStudents, setStudents } from "../redux/students";

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.student;
    this.props.fetchStudents(id);
  }

  componentWillUnmount() {
    this.props.clearStudent();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.student.id !== this.props.student.id) {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateStudent({ ...this.props.student, ...this.state });
  }

  render() {
    const { firstName, lastName, email } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <form id="student-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input name="firstName" onChange={handleChange} value={firstName} />

          <label htmlFor="lastName">Last Name:</label>
          <input name="lastName" onChange={handleChange} value={lastName} />

          <label htmlFor="email">Email:</label>
          <input name="email" onChange={handleChange} value={email} />

          <button type="submit">Update</button>
        </form>
        {/* <form onSubmit={(ev) => ev.preventDefault()}>
          <button
            className='update'
            onClick={() => this.props.deleteTodo(this.props.match.params.id)}
          >
            Delete
          </button>
        </form> */}
      </div>
    );
  }
}

const mapStateToProps = ({ student }) => ({
  student,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateStudent: (student) => dispatch(updateStudent(student, history)),
  fetchStudents: (id) => dispatch(fetchStudents(id)),
  clearStudent: () => dispatch(setStudents({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
