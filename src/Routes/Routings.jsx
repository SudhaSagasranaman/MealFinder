import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Meals from "../Pages/Meals";
const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/meals/:categoryName" element={<Meals />} />    </Routes>
  );
};

export default Routings;