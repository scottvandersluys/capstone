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

const removeProductFromShoppingBag = (shoppingBagItems, itemToRemove, removeAll) => {
  return shoppingBagItems.map((itemInBag) => {
    if (itemInBag.id === itemToRemove.id && (itemInBag.quantity !== 0 || removeAll)) {
      return removeAll ? null: { ...itemInBag, quantity: itemInBag.quantity - 1 }
    }
    return itemInBag
  }).filter((itemInBag) => itemInBag !== null);
};

export const ShoppingBagContext = createContext({
  addItemToShoppingBag: () => {},
  isShoppingBagOpen: false,
  removeItemFromShoppingBag: () => {},
  setIsShoppingBagOpen: () => {},
  shoppingBagItems: [],
  totalShoppingBagItems: 0,
  totalShoppingBagPrice: 0
});

export const ShoppingBagProvider = ({ children }) => {
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);
  const [shoppingBagItems, setShoppingBagItems] = useState([]);
  const [totalShoppingBagItems, setTotalShoppingBagItems] = useState(0);
  const [totalShoppingBagPrice, setTotalShoppingBagPrice] = useState(0);

  useEffect(() => {
    const totalItems = shoppingBagItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
    setTotalShoppingBagItems(totalItems)
  }, [shoppingBagItems]);

  useEffect(() => {
    const totalPrice = shoppingBagItems.reduce((total, currentItem) => total + (currentItem.quantity * currentItem.price), 0);
    setTotalShoppingBagPrice(totalPrice)
  }, [shoppingBagItems]);

  const addItemToShoppingBag = (itemToAdd) => {
    setShoppingBagItems(addProductToShoppingBag(shoppingBagItems, itemToAdd));
  };

  const removeItemFromShoppingBag = (itemToRemove, removeAll) => {
    setShoppingBagItems(removeProductFromShoppingBag(shoppingBagItems, itemToRemove, removeAll));
  };

  const value = {
    addItemToShoppingBag,
    isShoppingBagOpen,
    removeItemFromShoppingBag,
    setIsShoppingBagOpen,
    shoppingBagItems,
    totalShoppingBagItems,
    totalShoppingBagPrice
  };

  return (
    <ShoppingBagContext.Provider value={value}>{children}</ShoppingBagContext.Provider>
  );
};
