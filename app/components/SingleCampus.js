import React from "react";
import { connect } from "react-redux";
// import { fetchSingleCampus } from "../redux/singleCampus";

export class SingleCampus extends React.Component {
  componentDidMount() {
    this.props.fetchCampusesThunk();
  }

  render() {
    return (
      <div className="campusList">
        {this.props.campuses.map((campus) => (
          <div key={campus.id} className="campus">
            <h2>{campus.name}</h2>
            <img src={campus.imageUrl} />
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (reduxState) => {
  return {
    campuses: reduxState.campuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampusesThunk: () => dispatch(fetchCampuses()),
  };
};

export default connect(mapState, mapDispatch)(SingleCampus);
