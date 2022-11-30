import { BsSun, BsFillMoonFill } from "react-icons/bs";
import type { RootState } from "../../store/store";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHook";
import { toggleTheme } from "../../features/theme/themeSlice";

const Header = () => {
  const { darkTheme } = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const handleToggleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="mb-20">
      <nav className="border-b border-gray-200 border-opacity-25 py-2.5">
        <div className="flex justify-between mx-auto max-w-screen-xl">
          <a href="#!">
            <span className="text-xl font-semibold">Movies</span>
          </a>
          <div className="flex items-center lg:order-2">
            {darkTheme && (
              <BsSun
                onClick={() => handleToggleClick()}
                className="hover:opacity-50 cursor-pointer"
              />
            )}
            {!darkTheme && (
              <BsFillMoonFill
                onClick={() => handleToggleClick()}
                className="hover:opacity-50 cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
