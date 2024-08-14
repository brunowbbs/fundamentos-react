import RESTAURANTES from "./mock";

import RestaurantCard from "../restaurant-card";

import "./styles.css";

export default function Restaurants() {
  return (
    <div className="restaurants_container">
      <h3>Conheça nossos restaurantes</h3>

      <div className="container_cards">
        {RESTAURANTES.map((item) => (
          <RestaurantCard
            key={item.id}
            title={item.title}
            category={item.category}
            color={item.color}
          />
        ))}
      </div>

      <p className="see_more">Ver mais</p>
    </div>
  );
}
