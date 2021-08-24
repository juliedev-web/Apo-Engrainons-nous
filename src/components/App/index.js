// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Component

import HomePage from 'src/components/HomePage';
import PageConnexion from 'src/components/PageConnexion';
import SignIn from 'src/components/SignIn';
import Profil from 'src/components/Profil';
import MySeeds from 'src/components/PageMySeeds';

import Team from 'src/components/Team';

import PageShareSeed from 'src/components/PageShareSeed';

// == Import
import './styles.scss';
import list from 'src/data/list';
import Page404 from '../Page404';
import PageDetailSeed from '../PageDetailSeed';

// == Composant
const App = ({ getList, menuIsOpen }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1025;

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className="app">
      <Switch>

        <Route path="/" exact>
          <HomePage
            width={width}
            breakpoint={breakpoint}
            list={list}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/connexion" exact>
          <PageConnexion width={width} breakpoint={breakpoint} menuIsOpen={menuIsOpen} />
        </Route>

        <Route path="/equipe" exact>
          <Team width={width} breakpoint={breakpoint} menuIsOpen={menuIsOpen} />
        </Route>

        <Route path="/detail-graine/:id" exact>
          <PageDetailSeed width={width} breakpoint={breakpoint} menuIsOpen={menuIsOpen} />
        </Route>

        <Route path="/compte" exact>
          <Profil width={width} breakpoint={breakpoint} menuIsOpen={menuIsOpen} />
        </Route>

        <Route path="/inscription" exact>
          <SignIn width={width} breakpoint={breakpoint} />
        </Route>

        <Route path="/mesgraines" exact>
          <MySeeds width={width} breakpoint={breakpoint} />
        </Route>

        <Route path="/partager-une-graine" exact>
          <PageShareSeed width={width} breakpoint={breakpoint} />
        </Route>

        <Route path="/compte" exact>
          <Profil width={width} breakpoint={breakpoint} menuIsOpen={menuIsOpen} />
        </Route>

        <Route path="/partager-une-graine" exact>
          <PageShareSeed width={width} breakpoint={breakpoint} menuIsOpen={menuIsOpen} />
        </Route>

        <Route>
          <Page404 width={width} breakpoint={breakpoint} menuIsOpen={menuIsOpen} />
        </Route>

      </Switch>
    </div>
  );
};

// Props validation
App.propTypes = {
  getList: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};

// == Export
export default App;
