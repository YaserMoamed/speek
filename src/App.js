import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import Content from './Component/Content';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  const fetchResults = (query,setRelatedTopics) => {
    if (query !== "") {
      fetch(`https://api.duckduckgo.com/?q=${query}&format=json`)
        .then(res => res.json())
        .then(data => setRelatedTopics(data.RelatedTopics));
    }
  };

  return (
    <div>
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
     <Route path="/results" component={() => <Content fetchResults={fetchResults}/>}/>
    </Switch>
    </Router>
    </div> 
  )
}
export default App;

function Home() {
  return (
    <div>
    <span className="browser-logo">
    <img src="../images/speek-logo.svg" alt="logo"/>
     </span>
       <Content />
    </div>
  )
}

