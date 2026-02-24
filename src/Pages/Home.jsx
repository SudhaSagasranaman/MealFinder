import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [foodName, setFoodName] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategories(data.categories);
  };

  const handleSearch = () => {
    console.log(foodName);
    // later you can navigate to search page
  };

  return (
    <div id="home">

      {/* hero section main page */}
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
            <button onClick={handleSearch}>🔍</button>
          </div>
        </div>
      </div>

      {/* categories sec */}
      <div className="container categories-section">
        <h5 className="section-title">CATEGORIES</h5>

        <div className="row">
          {categories.map((cat) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              key={cat.idCategory}
            >
              <div className="category-card">

                {/* red badge top corner */}
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