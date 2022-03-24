import { createContext, useEffect, useState } from "react";

const addProductToShoppingBag = (shoppingBagItems, itemToAdd) => {
  const itemIsAlreadyInBag = shoppingBagItems.find((itemInBag) => itemInBag.id === itemToAdd.id)
  
  if (itemIsAlreadyInBag) {
    return shoppingBagItems.map((itemInBag) => itemInBag.id === itemToAdd.id 
      ? { ...itemInBag, quantity: itemInBag.quantity + 1 }
      : itemInBag
    );
  }

  return [...shoppingBagItems, { ...itemToAdd, quantity: 1 }];
};

export const ShoppingBagContext = createContext({
  isShoppingBagOpen: false,
  setIsShoppingBagOpen: () => {},
  shoppingBagItems: [],
  addItemToShoppingBag: () => {},
  totalShoppingBagItems: 0
});

export const ShoppingBagProvider = ({ children }) => {
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);
  const [shoppingBagItems, setShoppingBagItems] = useState([]);
  const [totalShoppingBagItems, setTotalShoppingBagItems] = useState(0)

  useEffect(() => {
    const totalItemsInBag = shoppingBagItems.reduce((total, currentItem) => total + currentItem?.quantity, 0);
    setTotalShoppingBagItems(totalItemsInBag)
  }, [shoppingBagItems]);

  const addItemToShoppingBag = (itemToAdd) => {
    setShoppingBagItems(addProductToShoppingBag(shoppingBagItems, itemToAdd));
  };

  const value = {
    addItemToShoppingBag,
    isShoppingBagOpen,
    setIsShoppingBagOpen,
    shoppingBagItems,
    totalShoppingBagItems
  };

  return (
    <ShoppingBagContext.Provider value={value}>{children}</ShoppingBagContext.Provider>
  );
};
