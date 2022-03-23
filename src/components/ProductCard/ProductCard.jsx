import { Button } from '..';
import './ProductCard.scss';

const ProductCard = ({ imageUrl, name, price }) => (
  <div className="ProductCard">
    <img src={imageUrl} alt={name} />
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <Button buttonClass="inverted">Add to Bag</Button>
  </div>
);

export { ProductCard };
