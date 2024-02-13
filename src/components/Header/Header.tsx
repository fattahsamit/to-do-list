import ActiveLink from "../ActiveLink/ActiveLink";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`py-5 flex justify-around items-center dark bg-white dark:bg-gray-800 shadow-lg text-neutral dark:text-slate-200 lg:text-xl font-medium sticky top-0 z-10`}
    >
      <ul>
        <li>
          <ActiveLink to="/">Home</ActiveLink>
        </li>
      </ul>

      <ul>
        <li>
          <ActiveLink to="/app">To-Do-List</ActiveLink>
        </li>
      </ul>

      <ul className="flex gap-5 items-center">
        <li>
          <ActiveLink to="/login">Login</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/signup">Signup</ActiveLink>
        </li>
        <button
          className="bg-primary text-white px-3 py-2 rounded-lg"
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </ul>
    </nav>
  );
};

export default Header;
