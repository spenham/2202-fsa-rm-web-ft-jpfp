import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCampus } from "../redux/updateCampus";
import { fetchCampuses, setCampuses } from "../redux/campuses";

class UpdateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.campus;
    this.props.fetchCampuses(id);
  }

  componentWillUnmount() {
    this.props.clearCampus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.campus.id !== this.props.campus.id) {
      this.setState({
        name: "",
        address: "",
        description: "",
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
    this.props.updateCampus({ ...this.props.campus, ...this.state });
  }

  render() {
    const { address, name, description } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <form id="campus-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input name="name" onChange={handleChange} value={name} />

          <label htmlFor="address">Address:</label>
          <input name="address" onChange={handleChange} value={address} />

          <label htmlFor="description">Description:</label>
          <input
            name="description"
            onChange={handleChange}
            value={description}
          />

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

const mapStateToProps = ({ campus }) => ({
  campus,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateCampus: (campus) => dispatch(updateCampus(campus, history)),
  fetchCampuses: (id) => dispatch(fetchCampuses(id)),
  clearCampus: () => dispatch(setCampuses({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCampus);
