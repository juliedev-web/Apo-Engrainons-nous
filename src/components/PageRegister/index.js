import React from 'react';

import PropTypes from 'prop-types';

// Components
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import FormRegister from 'src/containers/FormRegister';
import MenuModal from 'src/containers/MenuModal';

import './styles.scss';

// width, breakpoint : for menu in desktop and mobile
// isOpen : for modal menu

export default function PageRegister({ width, breakpoint, menuIsOpen }) {
  return (
    <div className="sign-in">
      <Header width={width} breakpoint={breakpoint} />
      <MenuModal />
      { !menuIsOpen && <FormRegister /> }
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}

PageRegister.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};
