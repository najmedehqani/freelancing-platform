import { NavLink } from "react-router-dom";

export function CustomNavLink({ link, inline = false }) {
  return (
    <li>
      <NavLink
        to={link.href}
        className={({ isActive }) =>
          `relative flex items-center gap-x-2 py-3 pr-4 pl-5 font-medium transition-all duration-200
        ${inline ? "md:py-1 md:px-0" : ""}
        ${
          isActive
            ? "text-primary-500 !font-bold"
            : "text-secondary-700 font-medium hover:text-primary-500"
        }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && !inline && (
              <span
                className="absolute right-1 top-1/2 h-5 w-[5px] -translate-y-1/2 rounded-full
                     bg-primary-500 transition-all duration-200"
              />
            )}

            {link.icon}
            {link.title}
          </>
        )}
      </NavLink>
    </li>
  );
}
