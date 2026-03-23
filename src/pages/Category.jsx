import React, { useState } from "react";
import { Electrician, Plumber, Gardener } from "../Totalwork";
import CategoryServices from "../components/Categorydata";
import '../components/Categorydata.css'
import { Link } from "react-router-dom";

function Category() {
  const [category, setCategory] = useState("Electrician");

  const servicesData = {
    Electrician,
    Plumber,
    Gardener
  };

  return (
    <div>
      <h2>Our Services</h2>

      <div className="category-buttons">
        {Object.keys(servicesData).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>
      <Link to='/book'>
      <CategoryServices data={servicesData[category]} />
      </Link>
    </div>
  );
}

export default Category;