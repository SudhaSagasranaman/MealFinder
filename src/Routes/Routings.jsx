import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Meals from "../Pages/Meals";
import MealDetails from "../Pages/MealDetails";

const Routings = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/meals/:categoryName" element={<Meals />} />

      <Route path="/meal/:id" element={<MealDetails />} />

      <Route path="*" element={<h2 className="text-center mt-5">Page Not Found</h2>} />

    </Routes>
  );
};

export default Routings;