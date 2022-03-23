import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { signOutUser } from '../../utilities/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </header>
      <Outlet />
    </>
  )
};

export { Header };