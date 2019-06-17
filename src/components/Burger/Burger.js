import React from 'react';
import classes from './Burger.css';
import BurgerIngredent from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, index) => {
            return <BurgerIngredent key={igKey + index} type={igKey}/>;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredent type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredent type="bread-bottom"/>
        </div>
    );
};

export default burger;