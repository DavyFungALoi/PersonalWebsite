import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import BlogListScreen from "./Screens/BlogListScreen";
import { ContactScreen } from "./Screens/ContactScreen";
import PortFolioListScreen from "./Screens/PortFolioListScreen";

function App() {
  return (
    <Router>
 <div className="WebsiteWideContainer">
        <div className="HeaderContainer">
          <Header></Header>
        </div>
        <div className="MainContainer">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/blog" component={BlogListScreen} exact />
          <Route path="/contact" component={ContactScreen} exact />
          <Route path="/projects" component={PortFolioListScreen} exact />
        </div>
        <div className="FooterContainer">
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;

/*
 <div className="WebsiteWideContainer">
 

*/
