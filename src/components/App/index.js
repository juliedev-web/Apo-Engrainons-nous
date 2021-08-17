// == Import npm
import React from 'react';

// == Composant
import Header from 'src/components/Header';
import Filters from 'src/components/Filters';
import NavBar from 'src/components/NavBar';
import List from 'src/components/List';

import list from 'src/data/list';

// == Import
import './styles.scss';
import FormConnexion from '../PageConnexion/FormConnexion';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <FormConnexion />
    <NavBar />
  </div>
);

// == Export
export default App;
