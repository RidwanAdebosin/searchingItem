import SearchComponent from "./components/SearchComponent";
import { Users } from "./components/usersData";

const App = () => {
  return (
    <>
      <SearchComponent users={Users} />
    </>
  );
};

export default App;
