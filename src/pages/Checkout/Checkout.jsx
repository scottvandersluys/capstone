import { useContext } from 'react';
import { ShoppingBagContext } from '../../contexts';
import { CheckoutItem } from '../../components';
import './Checkout.scss';

const Checkout = () => {
  const { shoppingBagItems, totalShoppingBagPrice } = useContext(ShoppingBagContext);
  return (
    <div className="Checkout">
      <div className="checkout-header">
        <div className="checkout-heading">
          <span>Product</span>
        </div>
        <div className="checkout-heading">
          <span>Description</span>
        </div>
        <div className="checkout-heading">
          <span>Quantity</span>
        </div>
        <div className="checkout-heading">
          <span>Price</span>
        </div>
        <div className="checkout-heading">
          <span>Remove</span>
        </div>
      </div>
      {
        shoppingBagItems.map((itemInBag) => (
          <CheckoutItem key={itemInBag.id} itemInBag={itemInBag} />
        ))
      }
      <span className="total">Total: ${totalShoppingBagPrice}</span>
    </div>
  );
};

export { Checkout };
