import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import FormProfil from 'src/containers/FormProfil';
import MenuModal from 'src/containers/MenuModal';

import './styles.scss';

export default function PageProfil({ width, breakpoint, menuIsOpen }) {
  return (
    <div className="sign-in">
      <Header width={width} breakpoint={breakpoint} />
      <MenuModal />
      { !menuIsOpen && <FormProfil /> }

      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}
PageProfil.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};
