import { Link, NavLink, Outlet } from "react-router-dom";

export const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="." //react router incorporated unix change dir cmd cd .. takes you to the parent folder, cd . leaves you on the current folder. "." leaves you on the current route, ".." takes you to the parent route
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="books"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Books
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
        <NavLink
          to="addBook"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Add Book
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
