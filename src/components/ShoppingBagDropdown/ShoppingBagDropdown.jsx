import { Button } from '..';
import './ShoppingBagDropdown.scss';

const ShoppingBagDropdown = () => {
  return (
    <div className="ShoppingBagDropdown">
      <div className="shopping-bag-items">
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export { ShoppingBagDropdown };
