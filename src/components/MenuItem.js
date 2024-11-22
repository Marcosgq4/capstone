const MenuItem = ({ item, image, text, price }) => {
  return (
    <div className="menu-item">
      <img src={image} alt={item} className="food-image" />
      <div className="menu-item-details">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{item}</h3>

          <p className="menu-item-price">${price}</p>
        </div>
        <p>{text}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
