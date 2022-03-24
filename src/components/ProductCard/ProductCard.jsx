import { useContext } from 'react';
import { ShoppingBagContext } from '../../contexts';
import { Button } from '..';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToShoppingBag } = useContext(ShoppingBagContext);

  const handleAddToBagClick = () => addItemToShoppingBag(product)

  return (
    <div className="ProductCard">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonClass="inverted" onClick={handleAddToBagClick}>
        Add to Bag
      </Button>
    </div>
  );
};

export { ProductCard };
