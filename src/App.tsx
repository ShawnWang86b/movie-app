import "./App.css";
import Header from "./components/Header/Header";
import { useAppSelector } from "./hooks/storeHook";

function App() {
  const { darkTheme } = useAppSelector((state) => state);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-red-900  dark:text-white px-4 min-h-screen">
        <Header />
      </div>
    </div>
  );
}

export default App;
