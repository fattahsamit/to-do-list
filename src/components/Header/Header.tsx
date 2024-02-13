import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="bg-violet-100 dark:bg-gray-800 py-5 flex justify-around items-center shadow-lg text-neutral dark:text-slate-200 lg:text-xl font-medium sticky top-0 z-10">
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

      <ul className="flex gap-5">
        <li>
          <ActiveLink to="/login">Login</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/signup">Signup</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
