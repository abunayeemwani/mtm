import { NavLink } from "react-router-dom";
import cn from "utils/tailwind";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h6>MTM</h6>
      <div>
        <nav>
          <ul className="flex gap-14">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn("text-white hover:text-red-500", isActive && "text-red-500")
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cn("text-white hover:text-red-500", isActive && "text-red-500")
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/media"
                className={({ isActive }) =>
                  cn("text-white hover:text-red-500", isActive && "text-red-500")
                }
              >
                Media
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  cn("text-white hover:text-red-500", isActive && "text-red-500")
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
