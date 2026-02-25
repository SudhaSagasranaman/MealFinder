import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MealDetails.css";

const MealDetails = () => {

  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMealDetails();
  }, [id]);

  const fetchMealDetails = async () => {

    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    setMeal(data.meals[0]);
  };

  // loading condition
  if (!meal) {
    return <h3 className="text-center mt-4">Loading...</h3>;
  }

  
  let ingredientList = [];

  for (let i = 1; i <= 20; i++) {

    const ingredient = meal["strIngredient" + i];
    const measure = meal["strMeasure" + i];

    if (ingredient && ingredient.trim() !== "") {

      ingredientList.push(
        <li key={i}>
          {ingredient} - {measure}
        </li>
      );

    }
  }

  return (

    <div className="meal-details-container">

      <div className="container">

        <h2 className="text-center mb-4">
          {meal.strMeal}
        </h2>

        <div className="row">

          {/* left side image */}
          <div className="col-md-5">

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="img-fluid rounded"
            />

          </div>

          {/* right side details */}
          <div className="col-md-7">

            <h5>Category: {meal.strCategory}</h5>
            <h6>Area: {meal.strArea}</h6>

            <h5 className="mt-3">Instructions</h5>
            <p>{meal.strInstructions}</p>

            <h5 className="mt-3">Ingredients</h5>

            <ul>
              {ingredientList}
            </ul>

          </div>

        </div>

      </div>

    </div>

  );

};

export default MealDetails;