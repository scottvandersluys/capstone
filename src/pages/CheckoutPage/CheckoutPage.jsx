import { useContext } from 'react';
import { ShoppingBagContext } from '../../contexts';
import { CheckoutItem } from '../../components';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const { shoppingBagItems, totalShoppingBagPrice } = useContext(ShoppingBagContext);
  return (
    <div className="CheckoutPage">
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

export { CheckoutPage };
