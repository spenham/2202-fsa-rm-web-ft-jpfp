import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { deleteCampus } from "../redux/deleteCampus";

export class DeleteCampus extends React.Component {
  render() {
    return (
      <form onSubmit={(ev) => ev.preventDefault()}>
        <button
          type="button"
          className="remove"
          onClick={console.log("TESTING", this.props.deleteCampus())}
        >
          Delete (X)
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ campus }) => ({
  campus,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  deleteCampus: (campus) => dispatch(deleteCampus(campus, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCampus);

// () => this.props.deleteCampus(this.props.match.params.id)
