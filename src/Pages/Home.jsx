import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {

  const [categories, setCategories] = useState([]);
  const [foodName, setFoodName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    if (foodName.trim() !== "") {
      navigate(`/search/${foodName}`);
    }
  };

  return (
    <div id="home">

      {/* main section */}
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

      {/* categories section*/}
      <div className="container categories-section">

        <h5 className="section-title">
          CATEGORIES
        </h5>

        <div className="row">

          {categories.map((cat) => (

            <div
              className="col-lg-3 col-md-4 col-sm-6"
              key={cat.idCategory}
            >
              <div
                className="category-card"
                onClick={() => navigate(`/meals/${cat.strCategory}`)}
              >

                {/*  red badge */}
                <span className="badge-text">
                  {cat.strCategory}
                </span>

                <img
                  src={cat.strCategoryThumb}
                  alt={cat.strCategory}
                  className="img-fluid"
                />

              </div>
            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Home;