import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Meals.css";

const Meals = () => {

  const { categoryName } = useParams();

  const [meals, setMeals] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null);

  useEffect(() => {
    fetchMeals();
    fetchCategoryInfo();
  }, [categoryName]);

  // fetching Meals
  const fetchMeals = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    setMeals(data.meals);
  };

  // fetching  Category Description
  const fetchCategoryInfo = async () => {
    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    const selectedCategory = data.categories.find(
      (cat) => cat.strCategory === categoryName
    );

    setCategoryInfo(selectedCategory);
  };

  return (
    <div id="meals">

      <div className="container">

        {/* category titles */}
        <h4 className="category-heading">
          {categoryName}
        </h4>

        {/* category description */}
        {categoryInfo && (
          <div className="category-description">
            <p>{categoryInfo.strCategoryDescription}</p>
          </div>
        )}

        {/* meals bootstrap grid */}
        <div className="row">

          {meals?.map((meal) => (
            <div
              key={meal.idMeal}
              className="col-lg-3 col-md-4 col-sm-6"
            >
              <div className="meal-card">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="img-fluid"
                />
                <h6>{meal.strMeal}</h6>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Meals;