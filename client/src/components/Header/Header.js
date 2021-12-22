import { NavLink, Link } from "react-router-dom";

export default function Header({ loggedIn, handleLogout, user }) {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img className="header__logo__img" />
          <h3 className="header__logo__text">Recipe Cart</h3>
        </div>
      </Link>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <NavLink to="/">Home</NavLink>
          </li>
          {loggedIn && (
            <>
              <li className="header__nav__list__item">
                <NavLink to={`/:${user.id}/list`}>Shopping List</NavLink>
              </li>
              <li className="header__nav__list__item">
                <NavLink to={`/:${user.id}/meals`}>Meal Plan</NavLink>
              </li>
              <li className="header__nav__list__item">
                <NavLink to={`/:${user.id}/submit`}>Add Recipes</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      {!loggedIn ? (
        <Link to="/login">
          <button className="header__button">Log In</button>
        </Link>
      ) : (
        <button className="header__button" onClick={handleLogout}>
          Sign Out
        </button>
      )}
    </header>
  );
}
