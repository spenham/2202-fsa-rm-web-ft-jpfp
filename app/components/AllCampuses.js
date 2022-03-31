import React from "react";
import { connect } from "react-redux";

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount() {
    // this.props.fetchCampusesThunk();
    console.log("okay, this seems to be working");
  }
  render() {
    return (
      <div className="campusList">
        {this.props.campuses.map((campus) => (
          <div key={campus.id} className="campus">
            <h2>{campus.name}</h2>
            <h2>{campus.imageURL}</h2>
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

export default connect(mapState, mapDispatch)(AllCampuses);
