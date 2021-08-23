// == Import npm
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
// == Composant

import HomePage from 'src/components/HomePage';
import PageConnexion from 'src/components/PageConnexion';
import SignIn from 'src/components/SignIn';
import Profil from 'src/components/Profil';

import Team from 'src/components/Team';

import PageShareSeed from 'src/components/PageShareSeed';

// == Import
import './styles.scss';
import list from 'src/data/list';
import Page404 from '../Page404';
import PageDetailSeed from '../PageDetailSeed';

// == Composant
const App = ({ isLogged }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1025;

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
          />
        </Route>

        <Route path="/connexion" exact>
          <PageConnexion width={width} breakpoint={breakpoint} />
        </Route>

        {
          isLogged
            ? (
              <Route path="/compte" exact>
                <Profil width={width} breakpoint={breakpoint} />
              </Route>
            ) : (
              <Redirect to="/connexion" />
            )
        }

        <Route path="/compte" exact>
          <Profil width={width} breakpoint={breakpoint} />
        </Route>

        <Route path="/inscription" exact>
          <SignIn width={width} breakpoint={breakpoint} />
        </Route>

        <Route path="/detail-graine/:id" exact>
          <PageDetailSeed width={width} breakpoint={breakpoint} />
        </Route>

        <Route path="/equipe" exact>
          <Team width={width} breakpoint={breakpoint} />
        </Route>

        {
          isLogged
            ? (
              <Route path="/partager-une-graine" exact>
                <PageShareSeed width={width} breakpoint={breakpoint} />
              </Route>
            ) : (
              <Redirect to="/connexion" />
            )
        }

        <Route>
          <Page404 width={width} breakpoint={breakpoint} />
        </Route>

      </Switch>
    </div>
  );
};

// Props validation
App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
