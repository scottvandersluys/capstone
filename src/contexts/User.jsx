import { createContext, useEffect, useState } from 'react';
import { createUserDocument, onAuthStateChangedListener } from '../utilities/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      setCurrentUser(user);
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};
