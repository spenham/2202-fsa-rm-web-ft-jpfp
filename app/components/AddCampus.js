import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { addCampus } from "../redux/addCampus";

export class AddCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      description: "",
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
    this.props.addCampus({ ...this.state });
  }

  render() {
    const { name, address, description } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="campus-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" onChange={handleChange} value={name} />
        <label htmlFor="address">Address:</label>
        <input name="address" onChange={handleChange} value={address} />
        <label htmlFor="description">Description:</label>
        <input name="description" onChange={handleChange} value={description} />
        <button type="submit">Submit</button>
        {/* <Link to="/">Cancel</Link> */}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  addCampus: (campus) => dispatch(addCampus(campus, history)),
});

export default connect(null, mapDispatchToProps)(addCampus);
