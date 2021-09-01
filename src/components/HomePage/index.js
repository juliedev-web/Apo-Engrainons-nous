import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Filters from 'src/containers/Filters';
import List from 'src/containers/List';
import MenuModal from 'src/containers/MenuModal';
import DirectChatPage from 'src/containers/DirectChatPage';

const HomePage = ({
  list,
  width,
  breakpoint,
  menuIsOpen,
  getPage,
  pageNumber,
  profil,
  isLogged,
  getFromList,
  slug,
  filterSlug,
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

    if (filterSlug === 'categories') {
      localStorage.setItem('getFromList', 'byCategoryList');
    }
    if (filterSlug === 'search') {
      localStorage.setItem('getFromList', 'byVarietyList');
    }

    getPage(+pageNumber - 1, 'homepage', slug, localStorage.getItem('getFromList'));
  }, []);

  useEffect(() => {
    if (localStorage.getItem('getFromList') === 'fullList' && !slug) {
      history.push(`/page/${+pageNumber || 1}`);
    }
    if (localStorage.getItem('getFromList') === 'byCategoryList') {
      history.push(`/categorie/${slug}/page/${+pageNumber || 1}`);
    }
    if (localStorage.getItem('getFromList') === 'byVarietyList') {
      history.push(`/search/${slug}/page/${+pageNumber || 1}`);
    }
  }, [getFromList]);
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
            <div className="tchat">
              <DirectChatPage from="chatPage" />
            </div>
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
  profil: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  getFromList: PropTypes.string.isRequired,
  slug: PropTypes.string,
  filterSlug: PropTypes.string,
};

HomePage.defaultProps = {
  slug: '',
  filterSlug: '',
};

export default HomePage;
