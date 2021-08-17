// == Import npm
import React from 'react';

// == Composant
import Header from 'src/components/Header';
import Filters from 'src/components/Filters';
// import NavBarMobile from 'src/components/NavBarMobile';
import List from 'src/components/List';

import list from 'src/data/list';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Filters />
    <List list={list} />
    {/* <NavBarMobile /> */}
  </div>
);

// == Export
export default App;
