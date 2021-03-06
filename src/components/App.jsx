import React from "react";
import Header from "./Header";
import MasterMedList from "./MasterMedList";
import DeleteMed from "./DeleteMed";
import About from "./About";
import { Switch, Route } from "react-router-dom";

function App(props) {

  const bodyStyle = {
    backgroundColor: "grey"
  }

  return (
    <div style={bodyStyle} className="container">
      <Header/>
      <Switch>
        <Route exact path="/" component={MasterMedList}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/delete" component={DeleteMed}/>
      </Switch>
    </div>
  );
}

export default App;
