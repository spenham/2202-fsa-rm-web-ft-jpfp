import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";
import AddCampus from "./AddCampus";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="/campuses">Campuses</Link>
          <Link to="/students">Students</Link>
          {/* <Link to="/campuses/add">Add Campus</Link> */}
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Switch>
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/students/:id" component={SingleStudent} />
            <Route path="/campuses/:id" component={SingleCampus} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
