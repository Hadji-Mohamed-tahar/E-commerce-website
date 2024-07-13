import React from "react";
import "./CategoryName.css";

const categoriesData = {
  id: 1,
  name: "Electronic",
  items: [
    { id: 1, name: "Wireless Speaker" },
    { id: 2, name: "Tablet" },
    { id: 3, name: "Smartphone" },
    { id: 4, name: "Laptop" },
    { id: 5, name: "iMac" },
    { id: 6, name: "Game Controller" },
    { id: 7, name: "Drone" },
    { id: 8, name: "Apple" },
  ],
};

const CategoryName = () => {
  return (
    <div className="CategoryName">
      <ul>
        <li>
          <a href="#">{categoriesData.name}</a>
        </li>

        {categoriesData.items.map((category, item) => (
          <li>
            <a href="#">{category.name}</a>
          </li>
        ))}

        <li>
          <a href="#">Browser all</a>
        </li>
      </ul>
    </div>
  );
};

export default CategoryName;
