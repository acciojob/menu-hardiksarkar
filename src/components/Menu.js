import React, { useState } from "react";
import menuData from "./MenuData";
// import image1 from '../images/item-1.jpeg'

export default function Menu() {
  // console.log(menuData);
  let [menu, setMenu] = useState(menuData);
  let categories = [
    { id: "main", value: "All" },
    { id: "filter-btn-1", value: "Breakfast" },
    { id: "filter-btn-2", value: "Lunch" },
    { id: "filter-btn-3", value: "Shakes" },
  ];

  function showItemFunc(key) {
    if (key == "All") {
      setMenu(menuData);
      return;
    }
    setMenu(
      menuData.filter(
        (item) => key.toLowerCase() == item.category.toLowerCase()
      )
    );
  }

  return (
    <div>
      <h1>Our Menu</h1>
      <p className="underline"></p>
      <nav>
        <ul className="navbar">
          {categories.map((item) => {
            return (
              <li key={item.id} onClick={() => showItemFunc(item.value)}>
                {item.value}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="menu-items">
        {menu.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="img-div">
                <img
                  src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt={item.title}
                  className="item-img"
                />
              </div>
              <div className="desc-div">
                <div className="heading-price">
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                </div>
                <p className="item-underline"></p>
                <p className="item-desc">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
