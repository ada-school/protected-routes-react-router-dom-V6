import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav>
      {isLoggedIn ? (
        <>
          <div>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
          </div>
          <button onClick={onLogout}>Log Out</button>
        </>
      ) : (
        <Link to="login">Login</Link>
      )}
    </nav>
  );
};

export default NavBar;
