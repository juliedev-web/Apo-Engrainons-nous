import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Filters from 'src/containers/Filters';
import List from 'src/containers/List';
import MenuModal from 'src/containers/MenuModal';

const HomePage = ({
  list,
  width,
  breakpoint,
  menuIsOpen,
  getPage,
  pageNumber,
  loadList,
  profil,
  isLogged,
}) => {
  const history = useHistory();
  useEffect(() => {
    if (profil.pseudo) {
      localStorage.setItem('token', profil.token);
      localStorage.setItem('pseudo', profil.pseudo);
      localStorage.setItem('email', profil.email);
      localStorage.setItem('city', profil.city);
      localStorage.setItem('id', profil.id);
      localStorage.setItem('isLogged', isLogged);
    }
    loadList();
    history.push(`/page/${+pageNumber || 1}`);
    getPage(+pageNumber - 1, 'homepage');
  }, []);
  return (
    <div className="home-page">
      <Header
        width={width}
        breakpoint={breakpoint}
      />

      <MenuModal />

      {
        !menuIsOpen && (
          <>
            <Filters />
            <List list={list} />
          </>
        )
      }

      <Footer
        width={width}
        breakpoint={breakpoint}
      />

    </div>

  );
};
HomePage.propTypes = {
  getPage: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  pageNumber: PropTypes.string.isRequired,
  loadList: PropTypes.func.isRequired,
};

export default HomePage;
