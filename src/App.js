import React from "react";
import Home from "./Component/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
