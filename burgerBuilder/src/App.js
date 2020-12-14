import React, { Component } from "react";
import Layout from "./component/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
