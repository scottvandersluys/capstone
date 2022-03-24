import './ShoppingBagItem.scss';

const ShoppingBagItem = ({ imageUrl, name, price, quantity }) => {

  return (
    <div className="ShoppingBagItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export { ShoppingBagItem };
