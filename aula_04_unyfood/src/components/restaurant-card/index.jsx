import "./styles.css";

export default function RestaurantCard(props) {
  return (
    <div className="restaurant_card">
      <div className="avatar" style={{ background: props.color }} />

      <div className="content_info">
        <p>{props.title}</p>
        <p>{props.category}</p>
      </div>
    </div>
  );
}
