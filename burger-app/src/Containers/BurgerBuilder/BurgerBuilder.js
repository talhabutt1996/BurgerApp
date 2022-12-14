import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";
class BurgerBuilder extends Component {
  render() {
    return (
      <Auxiliary>
        <Burger />
        <div>Build controls</div>
      </Auxiliary>
    );
  }
}
export default BurgerBuilder;
