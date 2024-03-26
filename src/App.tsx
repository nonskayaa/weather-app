import "./App.css";
import CitiesList from "./components/CititesList/ CitiesList";
import LogoTitle from "./components/LogoTitle/LogoTitle";
import Search from "./components/inputs/Search/Search";
function App() {
  return (
    <div className="main-container">
      <LogoTitle />
      <Search />
      <CitiesList />
    </div>
  );
}

export default App;
