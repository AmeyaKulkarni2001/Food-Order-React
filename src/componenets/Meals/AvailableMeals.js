
import { useEffect, useState } from "react";


// import DUMMY_MEALS from "./Dummy-Meals";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async() => {
      console.log(process.env.LINK)
      const res = await fetch('https://movie-f5957-default-rtdb.firebaseio.com/meals.json');
      const resData = await res.json();

      const loadedMeals = [];

      for(const key in resData){
        loadedMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price
        });
      }
      setMeals(loadedMeals);

    };
    fetchMeals();
    
  },[])

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
