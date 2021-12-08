import { useEffect, useState } from "react";

// import DUMMY_MEALS from "./Dummy-Meals";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      console.log(process.env);
      const res = await fetch(process.env.REACT_APP_LINK);
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      const resData = await res.json();

      const loadedMeals = [];

      for (const key in resData) {
        loadedMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <h1>Loading ..</h1>
      </section>
    );
  }
  if (isError) {
    return (
      <section className={classes.error}>
        <h1>{isError}</h1>
      </section>
    );
  }

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
