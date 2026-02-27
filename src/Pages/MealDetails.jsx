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

  if (!meal) return <h4 className="text-center mt-4">Loading...</h4>;

  let ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal["strIngredient" + i];
    const measure = meal["strMeasure" + i];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="container py-5">



      <div className="row">           

        {/* left side image*/}
        <div className="col-md-6 mb-4">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* right content */}
        <div className="col-md-6">
               {/* title */}

          <h3 className="fw-bold text-warning">
            {meal.strMeal}
<hr className="border-3 border-warning opacity-100" />   
       </h3>


          <div className="mx-auto mt-2"></div>

          <p className = "fw-bold"></p>Category:<p> {meal.strCategory}</p>

          {meal.strSource && (
            <p>
              <strong>Source:</strong>{" "}
              <a href={meal.strSource} target="_blank" rel="noreferrer">
                View Source
              </a>
            </p>
          )}

          {/* tags*/}
          {meal.strTags && (
            <div className="mb-3">
              <p className="fw-bold">Tags:</p>
              {meal.strTags.split(",").map((tag, index) => (
                <span key={index} className="badge bg-warning text-dark ms-2">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* ingredients list */}
          <div className="ingredients-box mt-4">

            <h6 className="text-white text-center mb-3">
              Ingredients
            </h6>

            <div className="row">

              {ingredients.map((item, index) => (
                <div key={index} className="col-6 mb-3 d-flex">

                  <span className="circle-number">
                    {index + 1}
                  </span>

                  <span className="ms-2 text-white">
                    {item.ingredient}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* measure section */}
      <div className="measure-box mt-4 p-4 rounded">

        <h6 className="fw-bold mb-3">Measure:</h6>

        <div className="row">
          {ingredients.map((item, index) => (
            <div key={index} className="col-md-6 mb-2 d-flex align-items-center">

              <i className="bi bi-egg-fried me-2 text-warning"></i>

              {item.measure}

            </div>
          ))}
        </div>

      </div>

      {/* instructions*/}
      <div className="mt-4">
        <h6 className="fw-bold mb-3">Instructions:</h6>
        <p>{meal.strInstructions}</p>
      </div>

    </div>
  );
};

export default MealDetails;