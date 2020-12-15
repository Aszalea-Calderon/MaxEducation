import React, { Component } from "react";
import Aux from "../hoc/Aux1";
import Burger from "../../src/component/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
