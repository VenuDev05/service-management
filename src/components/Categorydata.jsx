import React from "react";
import './Categorydata.css'

function CategoryServices({ data }) {
  return (
    <div className="service-works">
      {data.map((item) => (
        <div className="service-card" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <p>{item.dur}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryServices;