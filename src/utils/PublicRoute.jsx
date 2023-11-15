import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ isLoggedIn }) => {
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
