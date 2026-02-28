import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {

  const [foodName, setFoodName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {

    if (foodName.trim() === "") return;

    try {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
      );

      if (data.meals) {
        setSearchResults(data.meals);
      } else {
        setSearchResults([]);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="home">

      {/* hero sec */}
      <div className="hero-section">
        <div className="hero-content">

          <h2>What are your favorite cuisines?</h2>
          <p>PERSONALIZE YOUR EXPERIENCE</p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search recipes here..."
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
            <button onClick={handleSearch}>
              <i className="bi bi-search"></i>
            </button>
          </div>

        </div>
      </div>

      {/* search results */}
      {searchResults.length > 0 && (
        <div className="container mt-5">

          <h5 className="section-title text-center mb-4">
            SEARCH RESULTS
          </h5>

          <div className="row">

            {searchResults.map((meal) => (

              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={meal.idMeal}
              >
                <div
                  className="search-card"
                  onClick={() => navigate(`/meal/${meal.idMeal}`)}
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="img-fluid"
                  />

                  <h6 className="mt-2 text-center">
                    {meal.strMeal}
                  </h6>

                </div>
              </div>

            ))}

          </div>

        </div>
      )}

    </div>
  );
};

export default Home;