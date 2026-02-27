import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {

  const [categories, setCategories] = useState([]);
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

  return (
    <div className="footer-section mt-5">

      <div className="container">

        <h5 className="section-title text-center mb-4">
          CATEGORIES
        </h5>

        <div className="row">

          {categories.map((cat) => (

            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={cat.idCategory}
            >
              <div
                className="category-card"
                onClick={() => navigate(`/meals/${cat.strCategory}`)}
              >

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

export default Footer;