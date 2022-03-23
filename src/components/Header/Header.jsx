import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { signOutUser } from '../../utilities/firebase/firebase.utils';
import { ShoppingBagContext, UserContext } from '../../contexts';
import { ShoppingBagDropdown, ShoppingBagLink } from '..';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { isShoppingBagOpen } = useContext(ShoppingBagContext);

  return (
    <>
      <header className="Header">
        <Link className="header-logo-container" to="/">
          <Logo className="header-logo" />
        </Link>
        <div className="header-links">
          <Link className="header-link" to="/shop">
            Shop
          </Link>
          { currentUser 
            ? <span className="header-link" onClick={signOutUser}>Sign Out</span>
            : <Link className="header-link" to="/auth">
                Sign In
              </Link>
          }
          <ShoppingBagLink />
        </div>
        { isShoppingBagOpen && <ShoppingBagDropdown /> }
      </header>
      <Outlet />
    </>
  )
};

export { Header };