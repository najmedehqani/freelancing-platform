import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="focus:outline-none flex items-center justify-center"
      aria-label="Toggle Dark Mode"
    >
      <div className="flex bg-secondary-300 rounded-full gap-1 p-0.5 items-center">
        <HiOutlineSun
          className={`w-7 h-7 p-0.5 rounded-full text-yellow-500 transition-all duration-500 ${
            !isDarkMode
              ? " bg-white shadow-sm"
              : ""
          }`}
        />
        <HiOutlineMoon
          className={`w-7 h-7 p-0.5 text-gray-800 rounded-full transition-all duration-500 ${
            isDarkMode
              ? "bg-primary-300 shadow-sm"
              : ""
          }`}
        />
      </div>
    </button>
  );
}

export default DarkModeToggle;
