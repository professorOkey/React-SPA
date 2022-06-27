import { Link, Outlet } from "react-router-dom";

export const Layout = () => {

  return (
    <>
      <header className="header">
        <ul className="header__links">
          <li className="links__item">
            <Link to="/">Home</Link>
          </li>
          <li className="links__item" >
            <Link to="/posts">Posts</Link>
          </li>
          <li className="links__item">
            <Link to="/todo">Todo</Link>
          </li>
          <li className="links__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer className="footer">Footer</footer>
    </>
  );
};
