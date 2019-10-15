import React, { Component } from "react";
import { Route } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Notes from "./notes";
import SendMessage from "./sendmessage";
import Settings from "./settings";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <main role="main" className="container my-2">
          <Route path="/settings" component={Settings} />
          <Route path="/messages" component={SendMessage} />
          <Route path="/reports" component={() => <h1>Item 3</h1>} />
        </main>
      </div>
    );
  }
}

export default App;
