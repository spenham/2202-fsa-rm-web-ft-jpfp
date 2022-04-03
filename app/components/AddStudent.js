import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { addStudent } from "../redux/addStudent";

export class AddStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addStudent({ ...this.state });
  }

  render() {
    const { firstName, lastName, email } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="student-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input name="firstName" onChange={handleChange} value={firstName} />
        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" onChange={handleChange} value={lastName} />
        <label htmlFor="email">Email:</label>
        <input name="email" onChange={handleChange} value={email} />
        <button type="submit">Submit</button>
        {/* <Link to="/">Cancel</Link> */}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  addStudent: (student) => dispatch(addStudent(student, history)),
});

export default connect(null, mapDispatchToProps)(addStudent);
