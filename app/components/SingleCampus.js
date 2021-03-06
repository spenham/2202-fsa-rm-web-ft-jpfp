import React from "react";
import { connect } from "react-redux";
import { fetchSingleCampus } from "../redux/singleCampus";
import UpdateCampus from "./UpdateCampus";

export class SingleCampus extends React.Component {
  componentDidMount() {
    try {
      this.props.loadSingleCampus(this.props.match.params.id);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const campus = this.props.campus;
    return (
      <div>
        <h1>{campus.name}</h1>
        <h3>{campus.address}</h3>
        <h4>{campus.description}</h4>
        <p>
          {/* ~~~~~~~~~~~~~~~~~~~~FIX THE BELOW WHEN YOU FIGURE OUT THE MAPPING~~~~~~~~~~~~~~~~~~~~ */}
          {campus.students ? (
            campus.map((students) => <li>students</li>)
          ) : (
            <li>This campus currently has no students</li>
          )}
          {/* ~~~~~~~~~~~~~~~~~~~~FIX THE ABOVE WHEN YOU FIGURE OUT THE MAPPING~~~~~~~~~~~~~~~~~~~~ */}
        </p>
        <div>
          <h3>Update:</h3>
          <UpdateCampus />
        </div>
        <img src={campus.imageUrl} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSingleCampus: (id) => dispatch(fetchSingleCampus(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleCampus);
