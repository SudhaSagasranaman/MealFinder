import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [categories, setCategories] = useState([])

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

      {/* Navbar */}
      <div className="top-navbar">

        <div className="container d-flex justify-content-between align-items-center">

          <h5 className="mb-0">
            <Link to="/" className="logo-text">
              MEAL FINDER
            </Link>
          </h5>

          <i
            className="bi bi-list hamburger-icon"
            onClick={() => setShowMenu(true)}
          ></i>

        </div>

      </div>

      {/* Side Menu */}
      <div className={showMenu ? "side-menu active" : "side-menu"}>

        <div className="text-end">

<i
  className="bi bi-x-circle close-icon"
  onClick={() => setShowMenu(false)}
></i>          

        </div>


        {
          categories.map((cat) => (
            <div className="menu-item">
              {cat.strCategory} <hr/>
            </div>

          ))
        }

      </div>

    </div>

  )

}

export default Header