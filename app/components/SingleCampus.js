import React from "react";
import { connect } from "react-redux";
import { fetchSingleCampus } from "../redux/singleCampus";

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
    // const student = this.props
    console.log("working here", this);
    // console.log(campus);
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
