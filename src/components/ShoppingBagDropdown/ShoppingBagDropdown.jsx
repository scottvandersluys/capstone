import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBagContext } from '../../contexts';
import { Button, ShoppingBagItem } from '..';
import './ShoppingBagDropdown.scss';

const ShoppingBagDropdown = () => {
  const { shoppingBagItems } = useContext(ShoppingBagContext);
  const navigate = useNavigate();

  const handleCheckout = () => navigate("/checkout");
  
  return (
    <div className="ShoppingBagDropdown">
      <div className="shopping-bag-items">
        {
          shoppingBagItems.map((itemInBag) => <ShoppingBagItem key={itemInBag.id} { ...itemInBag } /> )
        }
      </div>
      <Button onClick={handleCheckout}>Checkout</Button>
    </div>
  );
};

export { ShoppingBagDropdown };
