import SearchComponent from "./components/SearchComponent";
import { Users } from "./components/usersData";

const App = () => {
  return (
    <div className="bg-slate-500 h-svh">
      <SearchComponent users={Users} />
    </div>
  );
};

export default App;
