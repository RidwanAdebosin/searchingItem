import React from 'react';
import SearchComponent from './components/SearchComponent';
import { demoUsers } from './components/usersData';

const App = () => {


  return (
    <div>
      <h1>Search Users</h1>
      <SearchComponent users={demoUsers} />
    </div>
  );
};

export default App;
