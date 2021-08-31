import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import MenuModal from 'src/containers/MenuModal';
import Form404 from './Form404';

const Page404 = ({ width, breakpoint, menuIsOpen }) => (
  <div className="page-404">
    <Header
      width={width}
      breakpoint={breakpoint}
    />

    <MenuModal />

    { !menuIsOpen && <Form404 /> }

    <Footer
      width={width}
      breakpoint={breakpoint}
    />
  </div>
);

Page404.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};

export default Page404;
