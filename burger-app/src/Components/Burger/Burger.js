import React from "react";
import "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
const burger = (props) => {
  return (
    <div className="Burger">
      <BurgerIngredients type="Bread-Top" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="Bread-Bottom" />
    </div>
  );
};
export default burger;
