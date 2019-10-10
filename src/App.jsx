import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blank from "./components/Blank";
import CreatePost from "./components/CreatePost";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          
          <Route path = "/Blank" component = { Blank } />
		  <Route path = "/CreatePost" component = { CreatePost } />
		  <Route exact path="/" component={Home}/>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
