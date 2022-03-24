import { useContext } from 'react';
import { ShoppingBagContext } from '../../contexts';
import { Button, ShoppingBagItem } from '..';
import './ShoppingBagDropdown.scss';

const ShoppingBagDropdown = () => {
  const { shoppingBagItems } = useContext(ShoppingBagContext);
  
  return (
    <div className="ShoppingBagDropdown">
      <div className="shopping-bag-items">
        {
          shoppingBagItems.map((bagItem) => <ShoppingBagItem { ...bagItem } /> )
        }
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export { ShoppingBagDropdown };
