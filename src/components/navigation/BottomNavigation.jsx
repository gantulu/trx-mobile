import { NavLink } from "react-router";

const items = [
  { label: "Home", path: "/" },
  { label: "Catalog", path: "/catalog" },
  { label: "Profile", path: "/profile" },
];

export default function BottomNavigation() {
  return (
    <nav className="bottom-navigation" aria-label="Primary navigation">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            isActive ? "bottom-navigation__item is-active" : "bottom-navigation__item"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
