import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCampuses } from "../redux/campuses";
import { AddCampus } from "./AddCampus";

export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.fetchCampusesThunk();
  }

  render() {
    return (
      <div>
        <h1>
          <u>Campus List</u>
        </h1>
        {this.props.campuses.map((campus) => (
          <Link to={`/campuses/${campus.id}`} key={campus.id}>
            <div className="campus">
              <h2>{campus.name}</h2>
              <img src={campus.imageUrl} />
            </div>
          </Link>
        ))}
        <div>
          <h2>Add Campus:</h2>
          <AddCampus />
        </div>
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

export default connect(mapState, mapDispatch)(AllCampuses);
