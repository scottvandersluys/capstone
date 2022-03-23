import { createContext, useState } from "react";

export const ShoppingBagContext = createContext({
  isShoppingBagOpen: false,
  setIsShoppingBagOpen: () => null
});

export const ShoppingBagProvider = ({ children }) => {
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);
  const value = { isShoppingBagOpen, setIsShoppingBagOpen };

  return (
    <ShoppingBagContext.Provider value={value}>{children}</ShoppingBagContext.Provider>
  );
};
