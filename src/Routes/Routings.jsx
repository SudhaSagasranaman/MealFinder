import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Meals from "../Pages/Meals";
 import MealDetails from "../Pages/MealDetails";;
const Routings = () => {
  return (
    <Routes>
     

<Route path="/meal/:id" element={<MealDetails />} />
      <Route path="/" element={<Home />} />
<Route path="/meals/:categoryName" element={<Meals />} />    </Routes>
  );
};

export default Routings;