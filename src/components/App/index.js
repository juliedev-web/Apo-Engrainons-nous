// == Import npm
import React from 'react';

// == Composant
import Header from 'src/components/Header';
import Filters from 'src/components/Filters';
import NavBar from 'src/components/NavBar';
import List from 'src/components/List';


// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Filters />
    <List list={list} />
    <NavBar />
  </div>
);

// == Export
export default App;
