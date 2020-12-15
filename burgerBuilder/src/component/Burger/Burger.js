import React from "react";
import "./Burger.css";
import BurgerIngredients from "./BurgerIngredient/BurgerIngredients";

const burger = (props) => {
  return (
    <>
      <div className="Burger">
        <BurgerIngredients type="bread-top" />
        <BurgerIngredients type="cheese" />
        <BurgerIngredients type="meat" />
        <BurgerIngredients type="bread-bottom" />
      </div>
    </>
  );
};

export default burger;
