import React from 'react';
import classes from './Burger.css';
import BurgerIngredent from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredent type="bread-top"/>
            <BurgerIngredent type="cheese"/>
            <BurgerIngredent type="meat"/>
            <BurgerIngredent type="bread-bottom"/>
        </div>
    );
};

export default burger;