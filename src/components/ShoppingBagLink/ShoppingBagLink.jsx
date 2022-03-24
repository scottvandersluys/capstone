import { useContext } from 'react';
import { ShoppingBagContext } from '../../contexts';
import { ReactComponent as BagIcon } from '../../assets/shopping-bag.svg';
import './ShoppingBagLink.scss';

const ShoppingBagLink = () => {
  const { isShoppingBagOpen, setIsShoppingBagOpen, totalShoppingBagItems } = useContext(ShoppingBagContext);

  const handleClick = () => setIsShoppingBagOpen(!isShoppingBagOpen);

  return (
    <div className="ShoppingBagLink" onClick={handleClick}>
      <BagIcon className="shopping-bag-icon" />
      <span className="shopping-bag-item-count">{totalShoppingBagItems}</span>
    </div>
  );
};

export { ShoppingBagLink };
