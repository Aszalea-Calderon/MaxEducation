import React, { Component } from "react";
// import PropTypes from "props-types";
import "./BurgerIngredient.css";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;

    //This Switch case allows us to switch in and out what we need
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="BreadBottom"></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className="Meat"></div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese"></div>;
        break;
      case "bacon":
        ingredient = <div className="Bacon"></div>;
        break;
      case "salad":
        ingredient = <div className="Salad"></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

//Props Validation, We set up what we are wanting to validate and it is checking if it is a string. We did import this.

// BurgerIngredients.propTypes = {
//   type: PropTypes.string.isRequired,
// };

export default BurgerIngredients;
