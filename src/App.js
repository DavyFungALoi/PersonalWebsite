import "../src/css/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import BlogListScreen from "./Screens/BlogListScreen";
import { ContactScreen } from "./Screens/ContactScreen";
import PortFolioListScreen from "./Screens/PortFolioListScreen";

function App() {
  return (
    <Router>
      <div>
      <Header className='Header'></Header>

      <div className="MainContainer">
        <Route path="/" component={HomeScreen} exact />
        <Route path="/blog" component={BlogListScreen} exact />
        <Route path="/contact" component={ContactScreen} exact />
        <Route path="/projects" component={PortFolioListScreen} exact />
      </div>
      </div>
    </Router>
  );
}

export default App;
