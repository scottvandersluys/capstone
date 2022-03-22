import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const Header = () => {
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
          <Link className="header-link" to="/auth">
            Sign In
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  )
};

export { Header };