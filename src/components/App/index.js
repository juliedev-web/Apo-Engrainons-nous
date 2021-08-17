// == Import npm
import React from 'react';

// == Composant
import Header from 'src/components/Header';
// import Filters from 'src/components/Filters';
import NavBar from 'src/components/NavBar';
// import List from 'src/components/List';

// import list from 'src/data/list';
import SignIn from 'src/components/SignIn';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <SignIn />
    {/* <Filters />
    <List list={list} /> */}
    <NavBar />
  </div>
);

// == Export
export default App;
