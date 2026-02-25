import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [categories, setCategories] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {

    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    )

    setCategories(data.categories)

  }

  return (

    <div>

      {/* navbar */}
      <div className="top-navbar">

        <div className="container d-flex justify-content-between align-items-center">

          <h5 className="mb-0">
            <Link to="/" className="logo-text">
              <i className="bi bi-egg-fried me-2"></i>
              MEAL FINDER
            </Link>
          </h5>

          <i
            className="bi bi-list hamburger-icon"
            onClick={() => setShowMenu(true)}
          ></i>

        </div>

      </div>

      {/* menu overlay */}
      {showMenu && (
        <div
          className="menu-overlay"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      {/* side menu */}
      <div className={showMenu ? "side-menu active" : "side-menu"}>

        <div className="text-end">
          <i
            className="bi bi-x-circle-fill close-icon"
            onClick={() => setShowMenu(false)}
          ></i>
        </div>

        <h6 className="menu-title">CATEGORIES</h6>

        {
          categories.map((cat) => (
            <div
              key={cat.idCategory}
              className="menu-item"
              onClick={() => {
navigate(`/meals/${cat.strCategory}`)       
         setShowMenu(false)
              }}
            >
              {cat.strCategory}
            </div>
          ))
        }

      </div>

    </div>

  )

}

export default Header