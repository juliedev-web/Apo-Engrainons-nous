// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

// == import Component
import HomePage from 'src/containers/HomePage';
import PageConnexion from 'src/components/PageConnexion';
import PageRegister from 'src/components/PageRegister';
import PageProfil from 'src/components/PageProfil';
import MySeeds from 'src/components/PageMySeeds';
import PageTeam from 'src/components/PageTeam';
import PageShareSeed from 'src/components/PageShareSeed';
import EmailConfirmationPage from 'src/containers/EmailConfirmationPage';
import PageDetailSeed from 'src/components/PageDetailSeed';
import Page404 from 'src/components/Page404';
import Tchat from 'src/containers/Tchat';

import './styles.scss';

// == Componant
const App = ({ menuIsOpen, checkToken, isLogged }) => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkToken();
    }
  }, []);
  /**
   * get the viewport width on resize
   * to switch between desktop header/footer to mobile header/footer
   */
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1025;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // willUnmount launch a function that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className="app">
      <Switch>

        <Route path="/uservalidate/:email/:key" exact>
          <EmailConfirmationPage
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/" exact>
          <HomePage
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/page/:pageNumber" exact>
          <HomePage
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/:filter/:slug/page/:pageNumber" exact>
          <HomePage
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/tchat" exact>
          <Tchat
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/connexion" exact>
          <PageConnexion
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/equipe" exact>
          <PageTeam
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/detail-graine/:id" exact>
          <PageDetailSeed
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/compte" exact>
          <PageProfil
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/inscription" exact>
          <PageRegister
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/mesgraines" exact>
          <MySeeds
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

        <Route path="/partager-une-graine" exact>
          <PageShareSeed
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
            from="shareNewSeedPage"
          />
        </Route>

        <Route>
          <Page404
            width={width}
            breakpoint={breakpoint}
            menuIsOpen={menuIsOpen}
          />
        </Route>

      </Switch>
    </div>
  );
};

// == Props validation
App.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
};

export default App;
