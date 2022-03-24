import { useContext } from 'react';
import { ShoppingBagContext } from '../../contexts';
import './CheckoutItem.scss';

const CheckoutItem = ({ itemInBag }) => {
  const { imageUrl, name, price, quantity } = itemInBag;
  const { addItemToShoppingBag, removeItemFromShoppingBag } = useContext(ShoppingBagContext);

  const handleAddOneMore = () => addItemToShoppingBag(itemInBag);
  const handleRemoveOne = () => removeItemFromShoppingBag(itemInBag);
  const handleRemoveAll = () => removeItemFromShoppingBag(itemInBag, true); 

  return (
    <div className="CheckoutItem">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveOne}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddOneMore}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={handleRemoveAll}>&#10005;</div>
    </div>
  );
};

export { CheckoutItem };
